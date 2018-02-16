update profiles
set profilename = $1
where profilename = $2;
select * from profiles