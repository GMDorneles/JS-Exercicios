/*2.1*/
select tabela_pessoa.nome, tabela_evento.evento
from tabela_pessoa left join tabela_evento
on tabela_pessoa.id  = tabela_evento.pessoa_id;
/*2.2*/
select nome
from tabela_pessoa
where 
nome LIKE '%Doe%';
/*2.3*/
insert into tabela_evento values
(default,'Evento E',5);
/*2.4*/
update tabela_evento set pessoa_id =1 where evento = 'Evento D';
/*2.5*/
delete from tabela_evento where evento = 'Evento B';
/*2.6*/
delete from tabela_pessoa where tabela_pessoa.id not in(select pessoa_id from tabela_evento);
/*2.7*/
alter table tabela_pessoa add idade int;
/*2.8*/
CREATE table tabela_telefone(
	id int primary key,
    telefone varchar(200),
    pessoa_id int
);
alter table tabela_telefone
add foreign key(pessoa_id )
references tabela_pessoa(id);
/*2.9*/
CREATE UNIQUE INDEX indice_unico
ON tabela_telefone(telefone);
/*2.10*/
drop table tabela_telefone;
