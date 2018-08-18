drop schema if exists pick4me;
create schema pick4me;
use pick4me;

create table Location (
  location_id int primary key auto_increment,
  name varchar(45) not null
);

create table User (
  user_id int primary key auto_increment,
  name varchar(45) not null,
  description varchar(256),
  image_path varchar(256),
  points int not null default 0,
  password varchar(45) not null,
  last_login_id int default 1,

  constraint last_login_location foreign key(last_login_id) references Location(location_id)
);

create table Question (
  question_id int primary key auto_increment,
  poster_id int not null,
  question varchar(256) not null,
  ans1 varchar(45) not null,
  ans2 varchar(45) not null,
  ans3 varchar(45),
  ans4 varchar(45),
  image_path varchar(256),
  post_time datetime not null default NOW(),
  exp_time int not null default 24,
  constraint question_poster_id foreign key(poster_id) references User(user_id)
);

create table Tag (
  tag_id int primary key auto_increment,
  name varchar(45) not null
);

create table Question_Has_Tag (
  question_id int not null,
  tag_id int not null,
  constraint qhs_q_id foreign key(question_id) references Question(question_id),
  constraint qhs_t_id foreign key(tag_id) references Tag(tag_id) 
);

create table User_Answers_Question (
  user_id int not null,
  question_id int not null,
  answer ENUM('ans1', 'ans2', 'ans3', 'ans4'),
  constraint uaq_u_id foreign key(user_id) references User(user_id),
  constraint uaq_q_id foreign key(user_id) references Question(question_id),
  primary key(user_id, question_id)
);

-- Standard Default Insert statements
insert into Location (location_id, name)
values (1, "Unknown");

select * from User;

select * from Location;

insert into User_Answers_Question (user_id, question_id, answer)
values (1, 2, 'ans1');
