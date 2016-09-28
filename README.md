# 线下转线上收银路由系统（bdd文档=需求+场景）

  随着互联网支付的普及，用户使用互联网支付越来越普遍，例如：手机支付。
  
  传统线下收银mis通常支持两种收银方式：现金支付和银行卡支付。为了迎合市场的发展，商户和用户对互联网支付需求成上升趋势。
  
  因此我公司对于市场的需要，需要做出一款产品迎合市场，满足客户的需要。
  
  此产品的特点在于在普通mis上加入互联网支付功能，例如：微信支付，支付宝支付。

## 商户部分功能描述

  假设：收银员已经打开了系统
  
### 登陆
  登陆功能用于收银员的身份识别，系统识别有效的的身份信息后才可以做后续的其他功能操作，否则在系统内不可以干任何事情。
  
  收银员身份识别的成因主要有两点：
  
    确认是有效的收银员
    
    对他所做的订单可以识别

  假设：系统只有收银员“999”，密码是“password”
  
  约束：当系统没用登陆信息时，系统必须停留在登陆界面
  
#### 场景：输入正确的收银员号和密码

  当收银员录入“999”
  
  并且输入密码“password”
  
  那么跳转到生成订单界面
  
#### 场景：输入错误的收银员号或密码

  当收银员录入非“999”的收银员号
  
  或录入非“password”的密码
  
  那么提示“收银员号或密码错误”并且让重新录入

#### 场景：输入空白的收银员号或密码
  当收银员录入“”的收银员号
  
  或录入“”的密码
  
  那么提示“必须输入**”并且让重新录入

### 生成订单
  当客户去商户购买商品时，首先选择商品，然后交给收银员手工录入或扫描商品用于生成订单。
  
  约束：收银员已经在生成订单界面，如果不在，完成其他的操作回到生成订单界面。
  
  假设：收银员为“999”
  
  假设：单价列表里有：
  
  | 产品 | 价格 |
  | ---- | ----:|
  | 饼干 | 670  |
  | 可乐 | 250  |

#### 场景：扫描录入订单

  假设：客户现在的商品有：
  
  | 产品 | 数量 |
  |------|------|
  | 饼干 | 1袋  |
  | 可乐 | 2听  |
  
  当收银员扫描可乐
  
  那么显示：
  
  | 产品 | 数量 | 单价 |
  |------|------|------|
  | 可乐 | 1    | 2.5  |
  | 总计 |      | 2.5  |
  
  当收银员扫描可乐
  
  那么显示：
  
   产品 | 数量 | 单价 
  ------|------|------
   可乐 | 2    | 2.5
   总计 |      | 5
  
  当收银员扫描饼干
  
  那么显示：
  
  | 产品 | 数量 | 单价 |
  |------|------|------|
  | 可乐 | 2    | 2.5  |
  | 饼干 | 1    | 6.7  |
  | 总计 |      | 11.7 |
  
  并且点提交按钮
  
  那么跳转支付页面

## 客户部分功能描述

## 系统管理部分功能描述
