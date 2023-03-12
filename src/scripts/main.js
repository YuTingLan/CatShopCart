import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
// 實作寫在這裡！
//宣告監聽元素

const tbody = document.querySelector("tbody");
const emptyCart = document.querySelector(".empty-cart");
const totalPrice = document.querySelector(".total-price");
const btnBFAdd = document.querySelector(".btn-BF-add");
const btnFatAdd = document.querySelector(".btn-fat-add");
const btnBossAdd = document.querySelector(".btn-boss-add");
const btnCowryAdd = document.querySelector(".btn-cowry-add");
const btnTigerAdd = document.querySelector(".btn-tiger-add");
const btnFlowerAdd = document.querySelector(".btn-flower-add");


let BF_counter = 0;
let fat_counter = 0;
let boss_counter = 0;
let cowry_counter = 0;
let tiger_counter = 0;
let flower_counter = 0;
let result_totalPrice = 0;

///清空購物車
emptyCart.addEventListener("click", () =>{
    if(tbody != null){
        tbody.replaceChildren();
        // while(tbody.firstChild){
        //     tbody.firstChild.remove();
        //     totalPrice.textContent = "$0"; 
        // }
        totalPrice.textContent = "$0"; 
        BF_counter = 0;
        fat_counter = 0;
        boss_counter = 0;
        cowry_counter = 0;
        tiger_counter = 0;
        flower_counter = 0;
        result_totalPrice = 0;
    };
});

//新增＋刪除
//老大
btnBossAdd.addEventListener("click", addBoss);
function addBoss(){
    const td3 = document.querySelector('.boss > td:nth-child(3)');
    const td4 = document.querySelector('.boss > td:nth-child(4)');
    let bossTr = document.querySelector(".boss");
    const boss_quantity = document.querySelector(".boss_quantity");
    let btnBossDel = document.querySelector(".btn-boss-del");

    //取得元素
    if(boss_counter == 0){
        const el = document.createElement("tr");
        el.classList.add("boss");
        el.innerHTML = 
        `<td>老大</td>
        <td><input type="number" class="boss_quantity" value="1" /></td>
        <td>$20</td>
        <td>$20</td>
        <td>
        <button class="remove-item-btn btn btn-danger btn-sm btn-boss-del">
            <i class="fas fa-trash-alt"></i>
        </button>
        </td>`;
        tbody.appendChild(el); 
        boss_counter = 1;
        result_totalPrice += 20;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
        console.log(`1: ${result_totalPrice}`);

        btnBossDel = document.querySelector(".btn-boss-del");
        btnBossDel.addEventListener('click', () =>{
            bossTr = document.querySelector(".boss");
            bossTr.remove(bossTr);
            boss_counter = 0;
            result_totalPrice -= 20;
            totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`; 
        }); 
    }else{
        boss_counter += 1;
        boss_quantity.addEventListener('input', () => {
            if(boss_quantity.value < 0){
                boss_quantity.value = 0;
            }
        });
        boss_quantity.value = boss_counter;
        
        // 使用 innerHTML 屬性來獲取 td 元素中的內容
        const tdContent = td3.innerHTML;
        // 使用 replace() 方法刪除 $
        const tdStr = tdContent.replace('$', '');
        // 將數字字符串轉換成數字
        const item_cost = Number(tdStr); //9.99
        let item_total_cost = item_cost * (boss_quantity.value);
        td4.textContent = `$${item_total_cost}`;
        
        btnBossDel.addEventListener('click', () =>{
            bossTr.remove(bossTr);
            boss_counter = 0;
            result_totalPrice -= item_cost;
            totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`; 
        }); 

        result_totalPrice += item_cost;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }        
} 
    

    

//貝貝
btnCowryAdd.addEventListener("click", () => {
    if(cowry_counter == 0){
        const el = document.createElement("tr");
        el.classList.add("cowry");
        el.innerHTML = 
        `<td>貝貝</td>
         <td><input type="number" class="cowry_quantity" value="1" /></td>
         <td>$15</td>
         <td>$15</td>
         <td>
          <button class="remove-item-btn btn btn-danger btn-sm btn-cowry-del">
            <i class="fas fa-trash-alt"></i>
          </button>
         </td>`
        tbody.appendChild(el); 
        cowry_counter = 1;

        result_totalPrice += 15;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }else{
        const td3 = document.querySelector('.cowry > td:nth-child(3)'); 
        const td4 = document.querySelector('.cowry > td:nth-child(4)');
        const cowryTr = document.querySelector(".cowry");

        cowry_counter += 1;
        const cowry_quantity = document.querySelector(".cowry_quantity");
        cowry_quantity.value = cowry_counter;
        
        // 使用 innerHTML 屬性來獲取 td 元素中的內容
        const tdContent = td3.innerHTML;
        // 使用 replace() 方法刪除 $
        const tdStr = tdContent.replace('$', '');
        // 將數字字符串轉換成數字
        const item_cost = Number(tdStr); //9.99
        let item_total_cost = item_cost * (cowry_quantity.value);
        td4.textContent = `$${item_total_cost}`;

        if(cowry_counter == 2){
            // console.log("test");
            const btnCowryDel = document.querySelector(".btn-cowry-del");
            btnCowryDel.addEventListener('click', () =>{
                cowryTr.remove(cowryTr);
                cowry_counter = 0;
            });
        }
        result_totalPrice += item_cost;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }
});
//老虎
btnTigerAdd.addEventListener("click", () => {
    if(tiger_counter == 0){
        const el = document.createElement("tr");
        el.classList.add("tiger");
        el.innerHTML = 
        `<td>老虎</td>
         <td><input type="number" class="tiger_quantity" value="1" /></td>
         <td>$10</td>
         <td>$10</td>
         <td>
          <button class="remove-item-btn btn btn-danger btn-sm btn-tiger-del">
            <i class="fas fa-trash-alt"></i>
          </button>
         </td>`;
        tbody.appendChild(el); 
        tiger_counter = 1;
        result_totalPrice += 10;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }else{
        const td3 = document.querySelector('.tiger > td:nth-child(3)');
        const td4 = document.querySelector('.tiger > td:nth-child(4)');
        const tigerTr = document.querySelector(".tiger");

        tiger_counter += 1;
        const tiger_quantity = document.querySelector(".tiger_quantity");
        tiger_quantity.value = tiger_counter;
        
        // 使用 innerHTML 屬性來獲取 td 元素中的內容
        const tdContent = td3.innerHTML;
        // 使用 replace() 方法刪除 $
        const tdStr = tdContent.replace('$', '');
        // 將數字字符串轉換成數字
        const item_cost = Number(tdStr); //9.99
        let item_total_cost = item_cost * (tiger_quantity.value);
        td4.textContent = `$${item_total_cost}`;

        if(tiger_counter == 2){
            // console.log("test");
            const btnTigerDel = document.querySelector(".btn-tiger-del");
            btnTigerDel.addEventListener('click', () =>{
                tigerTr.remove(tigerTr);
                tiger_counter = 0;
            });
        }
        result_totalPrice += item_cost;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }
});
//胖胖
btnFatAdd.addEventListener("click", () => {
    if(fat_counter == 0){
        const el = document.createElement("tr");
        el.classList.add("fat");
        el.innerHTML = 
        `<td>胖胖</td>
         <td><input type="number" class="fat_quantity" value="1" /></td>
         <td>$8.5</td>
         <td>$8.5</td>
         <td>
          <button class="remove-item-btn btn btn-danger btn-sm btn-fat-del">
            <i class="fas fa-trash-alt"></i>
          </button>
         </td>`;
        tbody.appendChild(el); 
        fat_counter = 1;
        result_totalPrice += 8.5;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }else{
        const td3 = document.querySelector('.fat > td:nth-child(3)');
        const td4 = document.querySelector('.fat > td:nth-child(4)');
        const fatTr = document.querySelector(".fat");

        fat_counter += 1;
        const fat_quantity = document.querySelector(".fat_quantity");
        fat_quantity.value = fat_counter;
        
        // 使用 innerHTML 屬性來獲取 td 元素中的內容
        const tdContent = td3.innerHTML;
        // 使用 replace() 方法刪除 $
        const tdStr = tdContent.replace('$', '');
        // 將數字字符串轉換成數字
        const item_cost = Number(tdStr); //9.99
        let item_total_cost = item_cost * (fat_quantity.value);
        td4.textContent = `$${item_total_cost}`;

        if(fat_counter == 2){
            // console.log("test");
            const btnFatDel = document.querySelector(".btn-fat-del");
            btnFatDel.addEventListener('click', () =>{
                fatTr.remove(fatTr);
                fat_counter = 0;
            });
        }
        result_totalPrice += item_cost;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }
});
//小花
btnFlowerAdd.addEventListener("click", () => {
    if(flower_counter == 0){
        const el = document.createElement("tr");
        el.classList.add("flower");
        el.innerHTML = 
        `<td>小花</td>
         <td><input type="number" class="flower_quantity" value="1" /></td>
         <td>$9.99</td>
         <td>$9.99</td>
         <td>
            <button class="remove-item-btn btn btn-danger btn-sm btn-flower-del">
                <i class="fas fa-trash-alt"></i>
            </button>
         </td>`;
        tbody.appendChild(el); 
        flower_counter = 1;
        result_totalPrice += 9.99;
        totalPrice.textContent = `$${result_totalPrice}`;
    }else{
        const td3 = document.querySelector('.flower > td:nth-child(3)');
        const td4 = document.querySelector('.flower > td:nth-child(4)');
        const flowerTr = document.querySelector(".flower");

        flower_counter += 1;
        const flower_quantity = document.querySelector(".flower_quantity");
        flower_quantity.value = flower_counter;
        
        // 使用 innerHTML 屬性來獲取 td 元素中的內容
        const tdContent = td3.innerHTML;
        // 使用 replace() 方法刪除 $
        const tdStr = tdContent.replace('$', '');
        // 將數字字符串轉換成數字
        const item_cost = Number(tdStr); //9.99
        let item_total_cost = (item_cost * (flower_quantity.value)).toFixed(2);
        td4.textContent = `$${item_total_cost}`;

        if(flower_counter == 2){
            // console.log("test");
            const btnFlowerDel = document.querySelector(".btn-flower-del");
            btnFlowerDel.addEventListener('click', () =>{
                flowerTr.remove(flowerTr);
                flower_counter = 0;
                result_totalPrice -= item_total_cost;
                totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
            });
        }
    }
});
//黑臉
btnBFAdd.addEventListener("click", () => {
    if(BF_counter == 0){
        const el = document.createElement("tr");
        el.classList.add("BF");
        el.innerHTML = 
        `<td>黑臉</td>
         <td><input type="number" class="BF_quantity" value="1" /></td>
         <td>$12.5</td>
         <td>$12.5</td>
         <td>
          <button class="remove-item-btn btn btn-danger btn-sm btn-BF-del">
            <i class="fas fa-trash-alt"></i>
          </button>
         </td>`;
        tbody.appendChild(el); 
        BF_counter = 1;
        result_totalPrice += 12.5;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }else{
        const td3 = document.querySelector('.BF > td:nth-child(3)');
        const td4 = document.querySelector('.BF > td:nth-child(4)');
        const BFTr = document.querySelector(".BF");

        BF_counter += 1;
        const BF_quantity = document.querySelector(".BF_quantity");
        BF_quantity.value = BF_counter;
        
        // 使用 innerHTML 屬性來獲取 td 元素中的內容
        const tdContent = td3.innerHTML;
        // 使用 replace() 方法刪除 $
        const tdStr = tdContent.replace('$', '');
        // 將數字字符串轉換成數字
        const item_cost = Number(tdStr); //9.99
        let item_total_cost = item_cost * (BF_quantity.value);
        td4.textContent = `$${item_total_cost}`;

        if(BF_counter == 2){
            // console.log("test");
            const btnBFDel = document.querySelector(".btn-BF-del");
            btnBFDel.addEventListener('click', () =>{
                BFTr.remove(BFTr);
                BF_counter = 0;
            });
        }
        result_totalPrice += item_cost;
        totalPrice.textContent = `$${result_totalPrice.toFixed(2)}`;
    }
});
