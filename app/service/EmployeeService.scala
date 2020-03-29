package service

import com.google.inject.Inject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.{ExecutionContext, Future}

class EmployeeService @Inject()(implicit ec: ExecutionContext, reactiveMongoApi: ReactiveMongoApi )  {

}
