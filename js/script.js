// creer un compte d'utilisateur dans la BD ("sign-Up.html")
//  signup Clients
function signup(){
    //Recuperation des donnees
    var usersTab= JSON.parse(localStorage.getItem("users") || "[]");  
    var firstName= document.getElementById("firstName").value;
    var isValidFirstName= verifSize(firstName,4);
    if(isValidFirstName== false){
        document.getElementById("firstNameError").innerHTML="check your firstName";
        document.getElementById("firstNameError").style.color="red";
    }
    else {document.getElementById("firstNameError").innerHTML=""}

    var LastName= document.getElementById("lastName").value;
    var isValidLastName= verifSize(LastName,6);
    if(isValidLastName== false){
        document.getElementById("lastNameError").innerHTML="check your LastName"
        document.getElementById("lastNameError").style.color="red";
    }
    else {document.getElementById("lastNameError").innerHTML=""}

    var Tel= document.getElementById("tel").value;
    var isValidTel= checkNumber(Tel);
    if(!isValidTel){
        document.getElementById("TelNumber").innerHTML="Check your tel number"
        document.getElementById("TelNumber").style.color="red";
    }
    else {document.getElementById("TelNumber").innerHTML=""}

    var email= document.getElementById("email").value;
    var isValidEmail= checkEmail(usersTab, email);
    if(isValidEmail){
        document.getElementById("emailError").innerHTML="email existant"
        document.getElementById("emailError").style.color="red";
    }
    else {document.getElementById("emailError").innerHTML=""}

    var passeword= document.getElementById("pwd").value;
    var isValidpwd= verifSize(passeword,8);
    if(!isValidpwd){
        document.getElementById("pwdError").innerHTML="invalid pwd"
        document.getElementById("pwdError").style.color="red";
    }
    else {document.getElementById("lastNameError").innerHTML=""}

    var confirmPasseword= document.getElementById("confirmPwd").value;
    var isEqualPwd= comparePwd(passeword,confirmPasseword);
    if(!isEqualPwd){
        document.getElementById("confirmpwdError").innerHTML="please check your pwd"
        document.getElementById("confirmpwdError").style.color="red";
    }
    else {document.getElementById("confirmpwdError").innerHTML=""}
if(isValidFirstName==true && isValidLastName==true && isValidTel==true && isValidpwd==true && isEqualPwd==true && !isValidEmail){
// creation d'un objet
    var user={
        id:maxId(usersTab)+1,
        fName: firstName,
        lName: LastName,
        tel : Tel,
        email : email,
        pwd: passeword, 
        role : "client",
    }
// Sauvegarde dans le local Storage (|| : ou)

// declaration du variable qui va recevoir le tableau users 
//Recupertion des utlisateur existant dans le local storage sous l'item users
//var usersTab= JSON.parse(localStorage.getItem("users") || "[]"); 

//insertion de l'objet user dans le tableau usersTab
usersTab.push(user); 

//remettre tout le tableau a jour des utilisateur dans le LS
//creation d'un cle users qui va recevoir une valeur : usersTab
localStorage.setItem("users", JSON.stringify(usersTab)); 

}
}
function signUpStore(){
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var fName = document.getElementById("fNameStore").value;
    var isValidFirstName= verifSize(fName,4);
    if(isValidFirstName== false){
        document.getElementById("fNameStoreError").innerHTML="check your firstName";
        document.getElementById("fNameStoreError").style.color="red";
    }
    else {document.getElementById("fNameStoreError").innerHTML=""}
    var lName = document.getElementById("lNameStore").value;
    var isValidLastName= verifSize(lName,6);
    if(isValidLastName== false){
        document.getElementById("lNameStoreError").innerHTML="check your LastName"
        document.getElementById("lNameStoreError").style.color="red";
    }
    else {document.getElementById("lNameStoreError").innerHTML=""}
    var Tel = document.getElementById("telStore").value;
    var isValidtel= checkNumber(Tel);
    if(!isValidtel){
        document.getElementById("TelStoreError").innerHTML="Check your phone number"
        document.getElementById("TelStoreError").style.color="red";
    }
    else {document.getElementById("TelStoreError").innerHTML=""}

    var email = document.getElementById("emailStore").value;
    var isValidEmail= checkEmail(usersTab, email);
    if(isValidEmail){
        document.getElementById("emailStoreError").innerHTML="email existant"
        document.getElementById("emailStoreError").style.color="red";
    }
    else {document.getElementById("emailStoreError").innerHTML=""}

    var password = document.getElementById("pwdStore").value;
    var isValidpwd= verifSize(password,8);
    if(!isValidpwd){
        document.getElementById("pwdStoreError").innerHTML="invalid pwd"
        document.getElementById("pwdStoreError").style.color="red";
    }
    else {document.getElementById("pwdStoreError").innerHTML=""}

    var confirmPassword = document.getElementById("confirmPwdStore").value;
    var isEqualPwd= comparePwd(password,confirmPassword);
    if(!isEqualPwd){
        document.getElementById("confirmpwdStoreError").innerHTML="please check your pwd"
        document.getElementById("confirmpwdStoreError").style.color="red";
    }
    else {document.getElementById("confirmpwdStoreError").innerHTML=""}
    var adress = document.getElementById("adressStore").value;
    var isValidAdress= checkLength(adress);
        if(!isValidAdress){
            document.getElementById("adressStoreError").innerHTML="Please write your adress";
            document.getElementById("adressStoreError").style.color="red";
        }
        else {document.getElementById("adressStoreError").innerHTML=""}
    var storeName = document.getElementById("storeName").value;
    var isValidStoreName= checkLength(storeName);
        if(!isValidStoreName){
            document.getElementById("storeNameError").innerHTML="Please write your store name";
            document.getElementById("storeNameError").style.color="red";
        }
        else {document.getElementById("storeNameError").innerHTML=""}
// if (isValidFirstName==true && isValidLastName==true && isValidphone==true && isValidEmail==true && isValidpwd==true && isEqualPwd==true && isValidAdress==true && isValidStoreName==true){
    
    var user ={
        id : maxId(usersTab)+1,
        fName :fName,
        lName : lName,
        tel : Tel,
        email : email,
        pwd : password,
        adress : adress,
        storeName : storeName,
        role : "store",
        statu : "ok",
    }
    usersTab.push(user);
    localStorage.setItem("users",JSON.stringify(usersTab)) ;
// }
}
function signUpAdmin(){
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;

    var user ={
        id : maxId(usersTab)+1,
        fName :fName,
        lName : lName,
        email : email,
        pwd : password,
        role : "admin",
    }
    usersTab.push(user);
    localStorage.setItem("users",JSON.stringify(usersTab)) ;
}
// fct permettant a un utilisateur ayant déja un compte de se connecter à son espace
// loginUser.html
function Login(){
    //recuperation des donnee
    var email= document.getElementById("loginEmail").value;
    var pwd= document.getElementById("loginPwd").value;
    var findedUser;
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    for (let i = 0; i < usersTab.length; i++) {
        if (email==usersTab[i].email && pwd==usersTab[i].pwd) {
            findedUser=usersTab[i];
            break;
        }
    }
    if(findedUser){
        if (findedUser.role=="store" && findedUser.statu=="Nok"){
            document.getElementById("loginError").innerHTML="Not Verified !";
            document.getElementById("loginError").style.color="red";
        }
        else{ 
        localStorage.setItem("connectedUser",findedUser.id);
        location.replace("index.html"); } 
    } 
    else {
    document.getElementById("loginError").innerHTML="please check email/pwd";
    document.getElementById("loginError").style.color="red";}
}
//Ajout des categories a la BD (destiner a l'admin): "addCategory.html"
function addCategory(){
    var categoryTab= JSON.parse(localStorage.getItem("categories")|| "[]");
    var nameCategory=document.getElementById("categoryName").value;
    var isValidName=verifSize(nameCategory,2);
    if(!isValidName){
        document.getElementById("categoryError").innerHTML="please check category Name";
    }
    else {document.getElementById("categoryError").innerHTML=""; }

    var existeName= checkCategory(categoryTab,nameCategory);
    if(existeName){
        document.getElementById("categoryUnique").innerHTML="cette category existe deja";
    }
    else {document.getElementById("categoryUnique").innerHTML=""; }

if (isValidName==true && existeName==false ){
    var category={
        id: maxId(categoryTab)+1,
        Name : nameCategory,
    }
categoryTab.push(category); 
localStorage.setItem("categories", JSON.stringify(categoryTab));
}
}
//Ajout des produits à la BD (destiné au (vendeur=store)) 
// "addProduct.html"
function addProduct(){
    var productsTab= JSON.parse(localStorage.getItem("products") || "[]");
    var storeId=localStorage.getItem("connectedUser");
    var Name= document.getElementById("Name").value;
    var isValidName= verifSize(Name,2);
    if(!isValidName){
        document.getElementById("NameError").innerHTML="Please check your name"
        document.getElementById("NameError").style.color="red";
    }
    else {document.getElementById("NameError").innerHTML=""}
    
    var price= document.getElementById("price").value;
    var isValidPrice= checkPrice(price);
    if(!isValidPrice){
        document.getElementById("priceError").innerHTML="invalid price"
        document.getElementById("priceError").style.color="red";
    }
    else {document.getElementById("priceError").innerHTML=""}

    var stock= document.getElementById("stock").value;
    var isValidStock= checkStock(stock);
    if(!isValidStock){
        document.getElementById("stockError").innerHTML="invalid Stock number"
        document.getElementById("stockError").style.color="red";
    }
    else {document.getElementById("stockError").innerHTML=""}

    var category= document.getElementById("category").value;
if(isValidName==true && isValidPrice==true && isValidStock==true){
// creation d'un objet
    var product={
        id:maxId(productsTab)+1,
        storeId: storeId,
        Name: Name,
        price: price,
        stock : stock,
        category : category,
    }

// Sauvegarde dans le local Storage (|| : ou)
//var productsTab= JSON.parse(localStorage.getItem("products") || "[]"); 
productsTab.push(product); 
localStorage.setItem("products", JSON.stringify(productsTab));
}
}
//fct qui controle la taille d'une chaine donnee
function verifSize(ch,x){
    if (ch.length>=x){
        return true;
    }
    else return false;
}  
//fct qui controle la taille du Tel
function checkNumber(ch){
    if (ch.length==8){
        return true;
    }
    else return false;
} 
//fct pour comparer le pwd et le confirmPwd
function comparePwd(ch1,ch2){
    // if (ch1 == ch2){
    //     return true;
    // }
    // else return false;
    return(ch1==ch2)
}
function checkPrice(x){
    if (x>0){
        return true;
    }
    else return false;
    //return(x>0);
}  
function checkStock(x){
    if (x>=15){
        return true;
    }
    else return false;
    //return(x>=15);
} 
function checkEmail(T,x) {
    for (let i = 0; i < T.length; i++) {
        if(T[i].email==x){
            return true;
            break;
        }
    else return false;
    } 
}
function maxId(T){
  var max;
    if (T.length==0){
        max=0;
    }
    else {
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
            if( T[i].id > max){
             max = T[i].id;
            }       
         }
    }
return(max) ;
}
function checkCategory(T,x){
    var exist= false;
    for (let i = 0; i < T.length; i++) {
        if(T[i].Name==x){
            exist=true;
        }
    }
  return(exist) ;
}
//Afficher d'une facon dynamique les produits dans la page "products.html" avec (name+price) // ``:bactique
//le contenue inserer est importer à partir de la page "index.html" avec des modification
// displayProducts.html
function displayProducts(){
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var content="";
    for (let i = 0; i < productsTab.length; i++) {
        content=content + `<div class="col-lg-3 col-md-6"> 
        <div class="single-product">
            <img class="img-fluid" src="img/product/product-item5.jpg" alt="">
            <div class="product-details">
                    <h6>${productsTab[i].Name}</h6>
                <div class="price">
                    <h6>${productsTab[i].price}</h6> 
                </div>
                <div class="col-md-12 form-group">
				    <button type="submit" value="submit" class="primary-btn" onclick="displayProduct(${productsTab[i].id})">Display</button>
			    </div>
            </div>
        </div>
    </div>`     
    }
document.getElementById("productAllDisplay").innerHTML=content;
} 
//avec un click sur le boutton "Display", cette fonction nous envoi vers la page "addToBasket.html"
function displayProduct(id){
    localStorage.setItem("displayedProduct",id);
    location.replace("addToBasket.html");  
}
//Remplissage de la page "addToBasket.html" par les attributs relatif à chaque produit existant dans le T = productsTab
 function prodDescription(){
    var productId = localStorage.getItem("displayedProduct");
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var findedProduct = searchObj("products", productId);
    //  for (let i = 0; i <  productsTab.length; i++) {
    //     if (productsTab[i].id==productId){
    //         findedProduct=productsTab[i];
    //         break;
    //     }   
    //  }
     document.getElementById("productName").innerHTML=findedProduct.Name;
     document.getElementById("productPrice").innerHTML=findedProduct.price;

     if(findedProduct.stock>0){document.getElementById("availibility").innerHTML="Availibility : in Stock"}
     else{document.getElementById("availibility").innerHTML="Availibility : out of Stock"}
 }
 //Affichage dynamique des catégories à travers le local storage)
//  addProducts.html
 function displayCategory(){
    var categoryTab = JSON.parse(localStorage.getItem("categories") || "[]");
    var cont = '<option value="">category</option>';
    for (let i = 0; i < categoryTab.length; i++) {
        cont=cont + `<option value="${categoryTab[i].Name}">${categoryTab[i].Name}</option>`
    }
    document.getElementById("category").innerHTML=cont;

 }
// Ajout d'un produit au panier (effectuer une commande) 
// addToBasket.html
 function addToBasket(){
    var userId= localStorage.getItem("connectedUser");
    if(userId){
        var qty = document.getElementById("quantity").value;
        var ordersTab=JSON.parse(localStorage.getItem("commandes") || "[]");
        var productId= localStorage.getItem("displayedProduct");
        var findedProduct = searchObj("products",productId);

    if(findedProduct.stock < qty){
        document.getElementById("qtyError").innerHTML="please check QTE";  
    }
    else {
        document.getElementById("qtyError").innerHTML=""; 
        var productsTab=JSON.parse(localStorage.getItem("products"));
        for (let i = 0; i < productsTab.length; i++) {
            if (productsTab[i].id==productId) {
                    productsTab[i].stock= productsTab[i].stock-qty;
                    localStorage.setItem("products", JSON.stringify(productsTab));
                break;
            } 
        }
        var order ={ 
            id : maxId(ordersTab)+1,
            Quantity : qty ,
            userId : userId,
            productId: productId,
        }
    ordersTab.push(order);
    localStorage.setItem("commandes", JSON.stringify(ordersTab));  
    }
    }
    else{alert("vous n'ete pas connecté")}
}
//retourner un objet d'un tableau T
 function searchObj(key,id){
    var findedObj;
    var T=JSON.parse(localStorage.getItem(key) || "[]");
    for (let i = 0; i < T.length; i++) {
        if(T[i].id==id){
            findedObj= T[i];
            break;
        }
    }
    return(findedObj);
 }
 function searchUser(x){
    var findedUser;
    var usersTab=JSON.parse(localStorage.getItem("users") || "[]");
    for (let i = 0; i < usersTab.length; i++) {
            if (usersTab[i].email==x) {
                findedUser=usersTab[i];
                break;
            }       
    }
    return(findedUser);
 }
 // Afficher tout les produits sous forme d'un tableau 
 //(script inseré dans la variable content est copier de la page cart.html)
 // produit (id,name,price,category,stock)
 function showProducts(){
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var content="";
    for (let i = 0; i < productsTab.length; i++) {
        content=content + `<tr> 
        <td>${productsTab[i].id}</td>
        <td>${productsTab[i].Name}</td>
        <td>${productsTab[i].price}</td>
        <td>${productsTab[i].category}</td>
        <td>${productsTab[i].stock}</td>
        <td class="d-flex">
       <button class="btn btn-warning" onclick="displayProduct(${productsTab[i].id})">Display</button>
       <button class="btn btn-warning mx-2" onclick="deleteProduct(${i})">Delete</button>
       <button class="btn btn-warning" onclick="updateProd(${i})">Update</button>
       </td>
        </tr> ` 
    }
document.getElementById("allProducts").innerHTML=content;
}
//supprimer un produit de l'interface "showProducts.html" et du localStorage
function deleteProduct(index){
    var productsTab = JSON.parse(localStorage.getItem("products"));
            productsTab.splice(index,1);
            localStorage.setItem("products",JSON.stringify(productsTab));
            location.reload();
}

 // Afficher tout les commandes effectuées par les utilisateurs dans la page "orderDetails.html" 
 // Commande : (Name,userName,productName,price,quantite,Total)
function OrderDetails(){
    var ordersTab=JSON.parse(localStorage.getItem("commandes") || "[]");
    var cont="";
    var total=0;
    for (let i = 0; i < ordersTab.length; i++) {
    var findedProduct = searchObj("products",ordersTab[i].productId);
    var findedUser = searchObj("users",ordersTab[i].userId);
        cont=cont+ `<tr> 
        <td>${ordersTab[i].id}</td>
        <td>${findedProduct.Name}</td> 
        <td>${findedUser.fName}</td>
        <td>${findedProduct.price}</td>
        <td>${ordersTab[i].Quantity}</td>
        <td>${findedProduct.price*ordersTab[i].Quantity}</td>
        <td><button class="primary-btn" onclick="DeleteObj('commandes',${i})">Delete</button></td>
        </tr>`  
        total = total + findedProduct.price*ordersTab[i].Quantity;
    }
document.getElementById("allOrders").innerHTML=cont + `le total est : ${total}`;
}
//supprimer un ordre de l'interface "orderDetails.html"  et du localStorage
// function deleteOrder(index){
//     var ordersTab = JSON.parse(localStorage.getItem("commandes"));
//             ordersTab.splice(index,1);
//             localStorage.setItem("commandes",JSON.stringify(ordersTab));
//             location.reload();
// }
//ou : <td>${searchObj("products",ordersTab[i].productId)}</td>

//Afficher commandes d'un user (client) connecte:
function displayMyOrders(){
    var connectedUserId=localStorage.getItem("connectedUser");
    var ordersTab=JSON.parse(localStorage.getItem("commandes") || "[]");
    var cont="";
    for (let i = 0; i < ordersTab.length; i++) {
    var findedProduct = searchObj("products",ordersTab[i].productId);
    var findedUser = searchObj("users",ordersTab[i].userId);
       if(ordersTab[i].userId==connectedUserId){
        cont=cont+ `<tr> 
        <td>${ordersTab[i].id}</td>
        <td>${findedProduct.Name}</td> 
        <td>${findedUser.fName}</td>
        <td>${findedProduct.price}</td>
        <td>${ordersTab[i].Quantity}</td>
        </tr> ` 
       } 
    }
document.getElementById("displayAllOrders").innerHTML=cont;
}
//Afficher tous les produits d'un vendeur connecte dans la page ("storeProducts.html")
function storeProducts(){
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var connectedUserId=localStorage.getItem("connectedUser") ;
    var content="";
    var myProductsTab=[];
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].storeId==connectedUserId){
            myProductsTab.push(productsTab[i]);
        }
    }
    for (let i = 0; i < myProductsTab.length; i++) {
        content=content + `<tr> 
        <td>${myProductsTab[i].id}</td>
        <td>${myProductsTab[i].storeId}</td>
        <td>${myProductsTab[i].Name}</td>
        <td>${myProductsTab[i].price}</td>
        <td>${myProductsTab[i].category}</td>
        <td>${myProductsTab[i].stock}</td>
        <td class="d-flex">
        <button class="btn btn-warning" target="b" onclick="displayProduct(${myProductsTab[i].id})">Display</button>
        <button class="btn btn-warning mx-2" onclick="deleteProductById(${myProductsTab[i].id})">Delete</button>
        <button class="btn btn-warning" onclick="update(${myProductsTab[i].id})">Update</button>
        </td>
        </tr> `
    }   
document.getElementById("allProducts").innerHTML=content;
} 
//2eme methode
// function storeProducts(){
//     var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
//     var connectedUserId=localStorage.getItem("connectedUser") ;
//     var content="";
//     for (let i = 0; i < productsTab.length; i++) {
//         if (productsTab[i].storeId==connectedUserId){
//         content=content + `<tr> 
//         <td>${productsTab[i].id}</td>
//         <td>${productsTab[i].storeId}</td>
//         <td>${productsTab[i].Name}</td>
//         <td>${productsTab[i].price}</td>
//         <td>${productsTab[i].category}</td>
//         <td>${productsTab[i].stock}</td>
//         <td class="d-flex">
//         <button class="btn btn-warning" onclick="productDetails(${productsTab[i].id})">Display</button>
//         <button class="btn btn-warning mx-2" onclick="deleteProduct(${i})">Delete</button>
//         <button class="btn btn-warning" onclick="update(${productsTab[i].id})">Update</button>
//         </td>
//         </tr> `
//         }     
//     }
// document.getElementById("allProducts").innerHTML=content;
// } 
//supprimer un produit de l'interface StoreProducts et du localStorage
function searchPositionById(id){
    var productsTab = JSON.parse(localStorage.getItem("products"));
    var index;
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].id==id){
          index=i;
        }  
 } 
}
function deleteProductById(id){
    var position = searchPositionById(id);
    deleteProduct (position);
}
//
function showUsersDetails(){
    var usersTab = JSON.parse(localStorage.getItem("users"));
    var cont="";
    for (let i = 0; i < usersTab.length; i++) {
        if(usersTab[i].role!="admin"){
        cont=cont+ `<tr> 
        <td>${usersTab[i].id}</td>
        <td>${usersTab[i].fName}</td> 
        <td>${usersTab[i].lName}</td>
        <td>${usersTab[i].tel}</td>
        <td>${usersTab[i].email}</td>
        <td>${usersTab[i].pwd}</td>
        <td class="d-flex">`
        if (usersTab[i].role=="store" && usersTab[i].statu=="Nok"){
            cont=cont+ `
            <button class="btn btn-warning" onclick="DeleteObj('users',${i})">Delete</button>
            <button class="btn btn-warning mx-2" onclick="goToDisplayedUser(${usersTab[i].id})">Display</button>
            <button class="btn btn-warning" onclick="updateUser(${i})">Update</button>
            <button class="btn btn-warning" onclick="validateStore(${i})">validate</button>
            <td>
            <tr>`
        }
        else{
            cont=cont+ `
            <button class="btn btn-warning" onclick="DeleteObj('users',${i})">Delete</button>
            <button class="btn btn-warning mx-2" onclick="goToDisplayedUser(${usersTab[i].id})">Display</button>
            <button class="btn btn-warning" onclick="updateUser(${i})">Update</button>
            <td>
            <tr>` 
        }
      }   
    }
document.getElementById("allUsers").innerHTML=cont;
}
function DeleteObj(key,index){
    var T = JSON.parse(localStorage.getItem(key));
            T.splice(index,1);
            localStorage.setItem(key,JSON.stringify(T));
            location.reload();
}
function goToDisplayedUser(id){
    localStorage.setItem("displayedUserId",id);
    location.replace("profile.html");  
}
function validateStore(index){
    var usersTab = JSON.parse(localStorage.getItem("users"));
            usersTab[index].statu="ok";
            localStorage.setItem("users",JSON.stringify(usersTab));
            location.reload();
}
function displayUsers(){
    var displayedUserId = localStorage.getItem("displayedUserId");
    var displayedUser = searchObj("users",displayedUserId)
       
     document.getElementById("userFname").innerHTML= displayedUser.fName;
     document.getElementById("userLname").innerHTML=displayedUser.lName;
     document.getElementById("userEmail").innerHTML=displayedUser.email;
     document.getElementById("userTel").innerHTML=displayedUser.tel;
}
// afficher les commandes passer sur les produits d'un store connecte
function storeOrders(){
    var ordersTab=JSON.parse(localStorage.getItem("commandes") || "[]"); 
    var cont="";
    var connectedStoreId=localStorage.getItem("connectedUser") ;
    for (let i = 0; i < ordersTab.length; i++) {
        var Product = searchObj("products",ordersTab[i].productId);
            if (Product.storeId==connectedStoreId){
                var findedUser = searchObj("users",ordersTab[i].userId);
                cont=cont+ `<tr> 
                <td>${ordersTab[i].id}</td>
                <td>${Product.Name}</td> 
                <td>${findedUser.fName}</td>
                <td>${Product.price}</td>
                <td>${ordersTab[i].Quantity}</td>
                <td>${Product.price*ordersTab[i].Quantity}</td>
                <td><button class="primary-btn" onclick="DeleteObj('commandes',${i})">Delete</button></td>
                </tr>`  
            }
    }
document.getElementById("allOrders").innerHTML=cont;
}
//Donner la main au store pour modifier les valeurs stock et price dans la BD (à l'aide d'un formulaire)
// fct à intergrer dans la fct "storeProducts()"
// storeInterface.html
function update(id){
    var product = searchObj("products",id);
    var content=`<div class="col-md-12 form-group">
        <input type="text" class="form-control" id="updatePrice" name="updatePrice" value=${product.price} >
        </div>
        <div class="col-md-12 form-group">
            <input type="text" class="form-control" id="updateStock" name="price" value=${product.stock} >
        </div>
        <div class="col-md-12 form-group">
            <button type="submit" value="submit" class="primary-btn" onclick="validate(${id})">validate</button>
        </div> ` 

document.getElementById("updatedForm").innerHTML=content;
}
function validate(id){
    var productsTab = JSON.parse(localStorage.getItem("products"));
    var newPrice = document.getElementById("updatePrice").value;
    var newStock = document.getElementById("updateStock").value;
     for (let i = 0; i < productsTab.length; i++) {
         if (productsTab[i].id==id){
            productsTab[i].price=newPrice;
            productsTab[i].stock=newStock;
            localStorage.setItem("products",JSON.stringify(productsTab));
            break;
         }
    }
    location.reload();
}
//modification des données des produits (price et stock) dans la BD 
// fct à intergrer dans la fct "showProducts()"
// admin.html 
function updateProd(index){
    var productsTab = JSON.parse(localStorage.getItem("products"));
    var content=`<div class="col-md-12 form-group">
        <input type="text" class="form-control" id="updatePrice" name="updatePrice" value=${productsTab[index].price} >
        </div>
        <div class="col-md-12 form-group">
            <input type="text" class="form-control" id="updateStock" name="price" value=${productsTab[index].stock} >
        </div>
        <div class="col-md-12 form-group">
            <button type="submit" value="submit" class="primary-btn" onclick="confirm(${index})">Validate</button>
        </div> ` 

document.getElementById("updatedAdminProd").innerHTML=content;
}
function confirm(index){
    var productsTab = JSON.parse(localStorage.getItem("products"));
    var newPrice = document.getElementById("updatePrice").value;
    var newStock = document.getElementById("updateStock").value;
            productsTab[index].price=newPrice;
            productsTab[index].stock=newStock;
            localStorage.setItem("products",JSON.stringify(productsTab));
    location.reload();
}
//modification des données des utilisteurs (email et pwd) dans la BD 
// fct à intergrer dans la fct "showUsersDetails()"
// admin.html 
function updateUser(index){
    var usersTab = JSON.parse(localStorage.getItem("users"));
    var content=`<div class="col-md-12 form-group">
        <input type="text" class="form-control" id="updateEmail" name="email" value=${usersTab[index].email} >
        </div>
        <div class="col-md-12 form-group">
            <input type="text" class="form-control" id="updatePwd" name="pwd" placeholder=${usersTab[index].pwd} >
        </div>
        <div class="col-md-12 form-group">
            <button type="submit" value="submit" class="primary-btn" onclick="save(${index})">Validate</button>
        </div> ` 

document.getElementById("updatedAdminUser").innerHTML=content;
}
function save(index){
    var usersTab = JSON.parse(localStorage.getItem("users"));
    var newEmail = document.getElementById("updateEmail").value;
    var newPasseword = document.getElementById("updatePwd").value;
        usersTab[index].email=newEmail;
        usersTab[index].pwd=newPasseword;
        localStorage.setItem("users",JSON.stringify(usersTab));
    location.reload();
}
function dynamicHeader(){
    var connectedUserId = localStorage.getItem("connectedUser");
    var content;
    var user = searchObj("users",connectedUserId);
    if (connectedUserId){
        localStorage.setItem("displayedUserId",connectedUserId);
        if (user.role==="client"){
            content = `<li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
        <a href="contact.html" class="nav-link">Contact</a>
        </li>
        <li class="nav-item">
        <a href="profile.html" class="nav-link">Hello ${user.fName}</a>
        </li>
        <li class="nav-item">
        <a href="displayProducts.html" class="nav-link">products</a>
        </li>
        <li class="nav-item">
        <a href="displayMyOrders.html" class="nav-link">My Basket</a>
        </li>
        <li class="nav-item">
        <a href="" class="nav-link" onclick ="logOut()">Log Out</a> 
        </li>` 
        }
        else if (user.role==="store") {
        content = `<li class="nav-item">
        <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
        <a href="contact.html" class="nav-link">Contact</a>
        </li>
        <li class="nav-item">
        <a href="profile.html" class="nav-link">Hello ${user.fName}</a>
        </li>
        <li class="nav-item">
        <a href="storeInterface.html" class="nav-link">Administration</a>
        </li>
        <li class="nav-item">
        <a href="" class="nav-link" onclick="logOut()">LogOut</a> 
        </li>`
        }  
        else { content = `<li class="nav-item">
        <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
        <a href="contact.html" class="nav-link">Contact</a>
        </li>
        <li class="nav-item">
        <a href="storeInterface.html" class="nav-link">Administration</a>
        </li>
        <li class="nav-item">
        <a href="" class="nav-link" onclick="logOut()">LogOut</a> 
        </li>`}  
    }
    else {
        content = `<li class="nav-item">
        <a href="index.html" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
    <a href="contact.html" class="nav-link">Contact</a>
    </li>
    <li class="nav-item">
    <a href="loginUser.html" class="nav-link">LogIn</a>
    </li>
    <li class="nav-item">
        <a href="displayProducts.html" class="nav-link" onclick="">products</a>
        </li>
    <li class="nav-item">
    vous ete <a href="sign-Up.html" class="nav-link">client</a>ou <a href="signUpStore.html" class="nav-link">store</a>
    </li>`    
}
 document.getElementById("navBnonConnecte").innerHTML=content; 
}
function logOut(){
    localStorage.removeItem("connectedUser");
    location.replace("index.html");
}
//fct qui verifie un la taille d'une chaine
function checkLength(ch){
    var test = false;
         if(ch.length!=0){
             test=true;
         }    
 return(test);
 }

function search(){ 
    var searchInput = document.getElementById("productName").value;
    if (searchInput.length!=0){
    localStorage.setItem("searchedProduct",searchInput);
    location.replace("displaysearchProduct.html"); }
    else{
        alert("vous n'avez rien saisie")
    }
}
function searchedProduct(){
    var searchInput= localStorage.getItem("searchedProduct");
    var productsTab= JSON.parse(localStorage.getItem("products"));
    var content="";
    for (let i = 0; i < productsTab.length; i++) {
        if(searchInput.toLowerCase()==(productsTab[i].Name).toLowerCase() ){
        content=content+`<div class="col-lg-3 col-md-6"> 
        <div class="single-product">
            <img class="img-fluid" src="img/product/product-item5.jpg" alt="">
            <div class="product-details">
                    <h6>${productsTab[i].Name}</h6>
                <div class="price">
                    <h6>${productsTab[i].price}</h6> 
                </div>
                <div class="col-md-12 form-group">
				    <button type="submit" value="submit" class="primary-btn" onclick="displayProduct(${productsTab[i].id})">Display</button>
			    </div>
            </div>
        </div>
    </div>`     
    }
}
document.getElementById("searchProduct").innerHTML= content; 
}
   










