enum Sexo {
    M = "Masculino",
    F = "Femenino"
    }
export class Persona {

    public Nombre: String;
    public Apellidos: String;
    public Edad: number;
    public Sexo: Sexo;

constructor(nombre: string, apellidos: string, edad: number, sexo: Sexo) {
    this.Nombre = nombre;
    this.Apellidos = apellidos;
    this.Edad = edad;
    this.Sexo = sexo;
  }
}
