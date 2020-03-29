package controllers

import com.google.inject.{Inject, Singleton}
import play.api.mvc.{AbstractController, ControllerComponents}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import models.{Employee, EmployeeRepositories}
import play.api.libs.json.Json

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class EmployeeController @Inject()(cc: ControllerComponents, val reactiveMongoApi: ReactiveMongoApi, employeeRepo: EmployeeRepositories)
  extends AbstractController(cc) with MongoController with ReactiveMongoComponents {

  implicit def ec: ExecutionContext = cc.executionContext
  val sendResultList = (employees: List[Employee]) => Ok(employees.toString())
  import models.JsonFormats._ // need the implicit writes


  def employeeByName(name: String) = Action.async {
    employeeRepo.getEmployeeByName(name).map(sendResultList)
  }

  def employeeById(id: String) = Action.async {
    employeeRepo.getEmployeeById(id).map { maybeEmployee =>
      maybeEmployee.map(emp => Ok(Json.toJson(emp))).getOrElse(NotFound("No employee found with given id"))
    }
  }

  def employeeByDesignation(designation: String) = Action.async {
    employeeRepo.getEmployeeByDesignation(designation).map(sendResultList)
  }
}
