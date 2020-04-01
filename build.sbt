name := """play-scala-seed"""
organization := "play-scala-react-demo"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala).settings(
  watchSources ++= (baseDirectory.value / "public" ** "*").get
)

scalaVersion := "2.12.6" // 2.13 failes in the cursor collect section. says cbf missing implicit conversion for Factory
routesGenerator := InjectedRoutesGenerator


libraryDependencies += guice
libraryDependencies ++= Seq(
  "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test,
  "org.reactivemongo" %% "play2-reactivemongo" % "0.20.3-play28"
)

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "play-scala-react-demo.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "play-scala-react-demo.binders._"
