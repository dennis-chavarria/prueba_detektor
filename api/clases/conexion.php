<?php

	class Conexion{

		private $usuario="root";
		private $contrasena="root";
		private $server="localhost";
		private $db = "test";
		private $conexion;

		public function __construct(){
			$this->conexion= pg_connect("host=".$server." dbname=".$db." user=".$usuario." password=".$contrasena)
                              or die( "Error al conectar: ".pg_last_error() );
		}

		public function getConexion(){
			return $this->conexion;
		}

		public function cerrarConexion(){
      pg_close($this->conexion);
		}

	}
?>
