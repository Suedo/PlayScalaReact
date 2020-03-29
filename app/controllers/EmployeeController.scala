package controllers

import com.google.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import models.{Employee, EmployeeRepositories}
import scala.concurrent.ExecutionContext.Implicits.global
import play.api.libs.json.Json


class EmployeeController @Inject()(components: ControllerComponents, val reactiveMongoApi: ReactiveMongoApi, empRepo: EmployeeRepositories)
  extends AbstractController(components) with MongoController with ReactiveMongoComponents {

  def employeeById(id: Int) = Action.async {
    empRepo.getEmployee(id).map { MaybeEmp =>
      MaybeEmp.map(
        emp => Ok(Json.toJson(emp))
      ).getOrElse(NotFound)
    }
  }
}
