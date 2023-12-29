# 用户手册
1.	主界面：
主界面就是打开网站时显示的界面，即京东购物商城界面，顶部有导航栏区，里面可以选择登录、注册、查询我的订单、我的京东等功能，右上角有京东官方二维码，可以扫描直接进入，中间的轮播图可供用户进行查看商品相关信息。

3.	功能介绍：
（1）首页：京东购物商城的主界面，可以选择直接浏览，也可以选择登录。首页将很多产品进行了大致的分类，便于用户选择。也有很多服务选项。用户可以根据主页导航栏访问其他功能，如登录注册，个人中心，购物车等等。
（2）用户登录：主界面顶部有登录按钮，点击进入后需要按规定格式输入用户名和登录密码。用户名的格式是4-6位英文字母，密码的格式都是5-7位数字，按照格式输入后会跳转主界面，输入失败则会弹出相应的警告框，并且不会跳转到其他页面，只有成功登录以后才会跳转到京东主页。同时右上角有立即注册按钮，点击即可跳转的注册界面。
（3）个人主页：在个人主页中点击待收货的订单图标，即可跳转到我的订单页面，查看购买的商品信息。或者点击个人头像下面的修改个人信息链接即可跳转到个人信息页面， 
（4）个人信息：可以查看个人信息，如名字、生日、性别等。
（5）购物车：可以查看购物车内的商品以及商品数量和价格。
（6）注册页面：与登录界面类似，需要满足注册要求才可跳转到京东主页，否则弹出相应的错误提示。
（7）我的订单：可以查看已购买商品的物流信息，以及时间，订单号，支付方式，买家等等。

3.登陆界面测试用例
（1）用户名和密码为空，用户登录失败，不会自动跳转到主界面。
（2）用户名：123
	 密码：12345678
	用户登录失败，弹出警告框显示“用户名必须是4-6位英文字母”，同时无法跳转至主界面。
（3）用户名：xyao
	 密码：1234567
	用户登录成功，跳转至主界面。
 
 

