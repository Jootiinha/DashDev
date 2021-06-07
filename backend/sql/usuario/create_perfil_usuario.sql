CREATE TABLE perfil_usuario(
    id int primary key auto_increment,
    nome_completo varchar(60),
    cpf varchar(30),
    data_nascimento varchar(10),
    cargo_hotel varchar(30),


    id_endereco int,
    id_login int,
    id_contato int,
);