--1
create table test_indexing(id serial, name text);

--2
insert into test_indexing(name) select 'bob' from generate_series(1,250000);

insert into test_indexing(name) select 'alice' from generate_series(1,250000);

--3 check the result before index
explain analyze
select * from test_indexing where id = 2;

--4 create index
create index test_idx_ebac on test_indexing(id);

--5 check the result after index
explain analyze select * from test_indexing where id = 2;