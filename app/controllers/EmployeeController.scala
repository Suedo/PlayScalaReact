package controllers

import com.google.inject.{Inject, Singleton}
import play.api.mvc.{AbstractController, ControllerComponents}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import models.{Employee, EmployeeRepositories}
import play.api.libs.json.Json

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class EmployeeController @Inject()(cc: ControllerComponents, val reactiveMongoApi: ReactiveMongoApi, empRepo: EmployeeRepositories)
  extends AbstractController(cc) with MongoController with ReactiveMongoComponents {

  implicit def ec: ExecutionContext = cc.executionContext

  def employeeByName(name: String) = Action.async {
    println("getting emp by name")
    empRepo.getEmployee(name).map { MaybeEmp =>
      println(MaybeEmp)
      MaybeEmp.map(
        emp => Ok(Json.toJson(emp))
      ).getOrElse(NotFound("name is invalid"))
    }
  }

  def test = Action { request =>
    Ok("Got request YoooHooo")
  }
}
