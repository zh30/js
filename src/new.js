function User(name) {
  // 构造器模式测试
  console.info("target: ", new.target);
  if (!new.target) {
    return new User(name);
  }
  // this = {}
  this.name = name;
  this.isAdmin = false;
  // return this;
}
User("nan");
const user = new User("he");

console.info("user: ", user);
