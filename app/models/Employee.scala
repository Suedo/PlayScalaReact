package models

import akka.http.scaladsl.model.HttpHeader.ParsingResult.Ok
import reactivemongo.play.json._, collection._
import collection._
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import com.google.inject.Inject
import play.api.libs.json.{JsObject, Json, OFormat}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
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
                     password: Option[String] // whatever you wanna hide thru projection, needs to be wrapped in Option
                   )

object JsonFormats {

  import play.api.libs.json._
  implicit val employeeFormat: OFormat[Employee] = Json.format[Employee]
  implicit val employeeWrites: OWrites[Employee] = Json.writes[Employee] // needed when writing to JSON in controller

  val NoObjIDPassword = Some(Json.obj(
    "_id" -> 0,
    "password" -> 0
  ))
}

class EmployeeRepositories @Inject()(implicit ec: ExecutionContext, reactiveMongoApi: ReactiveMongoApi) {

  import JsonFormats._
  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("employee"))

  def getEmployeeByName(name: String): Future[List[Employee]] = {
    println(collection)
    val selector = Json.obj("first_name" -> name)
//    val projection = Some(Json.obj("_id" -> 0))
    val projection = NoObjIDPassword
    collection.flatMap(_.find(selector, projection)
        .cursor[Employee](ReadPreference.primary)
        .collect[List](-1, Cursor.FailOnError[List[Employee]]())
    )
  }

  def getEmployeeById(id: String): Future[Option[Employee]] = {
    val selector = Json.obj("id" -> id)
    val projection = NoObjIDPassword

    collection.flatMap(_.find(selector,projection).one[Employee])
  }

  def getEmployeeByDesignation(designation: String): Future[List[Employee]] = {

    val selector = Json.obj("Designation" -> designation)
    val projection = NoObjIDPassword

    collection.flatMap(_.find(selector, projection)
      .cursor[Employee](ReadPreference.Primary)
      .collect[List](-1, Cursor.FailOnError[List[Employee]]())
    )
  }


}
