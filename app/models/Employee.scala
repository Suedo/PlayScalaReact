package models

import reactivemongo.play.json._
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import com.google.inject.Inject
import play.api.libs.json.{Json, OFormat}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.{ExecutionContext, Future}

case class Employee(
                     _id: Option[BSONObjectID],
                     id: String,
                     first_name: String,
                     last_name: String,
                     email: String,
                     gender: String,
                     DOB: String,
                     Designation: String,
                     username: String,
                     password: String,
                   )

object Employee {

  import play.api.libs.json.Json
  implicit val employeeFormat: OFormat[Employee] = Json.format[Employee]
}

class EmployeeRepositories @Inject()(implicit ec: ExecutionContext, reactiveMongoApi: ReactiveMongoApi) {

  import Employee._

  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection[JSONCollection]("employee"))

  def getEmployee(id: Int): Future[Option[Employee]] = {
    val selector = Json.obj("id" -> id)
    val projection = Some(Json.obj("id" -> id))
    collection.flatMap(_.find(selector,projection).one[Employee])
  }


}
