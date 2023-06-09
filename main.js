function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    // this.salario = salario;

    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if(typeof valor === 'number') {
            _salario = valor;
        }
    }
}

function Almoxarife(nome) {
    Funcionario.call(this, nome, "Almoxarife", 1550);

}

function Tecnico(nome) {
    Funcionario.call(this, nome, "Técnico", 2500);
    
}

function Vendedor(nome) {
    Funcionario.call(this, nome, "Vendedor", 4000);
    
}

const funcionario1 = new Almoxarife("Rafael");
const funcionario2 = new Tecnico("Diego");
const funcionario3 = new Vendedor("Hingra");

console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());
console.log(funcionario3.getSalario());

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
