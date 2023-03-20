import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
// 實作寫在這裡！

//宣告監聽元素
const tbody = document.querySelector("tbody");
const emptyCart = document.querySelector(".empty-cart");
let totalPrice = document.querySelector(".total-price");
let resultPrice = 0;

///清空購物車 btn
emptyCart.addEventListener("click", () =>
{
    if(tbody != null)
    {
        tbody.replaceChildren();
        totalPrice.textContent = "$0"; 
    };
});

// 新增小貓至購物車 btn
const addCatBtn = document.getElementsByClassName("btn-add");
for(let i = 0; i < addCatBtn.length; i++)
{
    addCatBtn[i].addEventListener("click", () => 
    {
        addCatCart(i);
    });
}

// 針對按下 新增btn 的事件做處理
function counterItems(name){
    const rows = tbody.querySelectorAll("tr");
    rows.forEach((row) => 
    {
        const nameCell = row.querySelector("td:nth-child(1)"); //td:nth-child(1)意即欄位1：項目
        const quantityInput = row.querySelector(".quantity"); //數量
        const itemCostCell = row.querySelector("td:nth-child(3)"); //td:nth-child(3)意即欄位3：單價
        let itemTotalCostCell = row.querySelector("td:nth-child(4)"); //td:nth-child(4)意即欄位4：小計
        // const btnDel = row.querySelector("td:nth-child(5)"); //td:nth-child(5)意即欄位5：btnDel
        if (nameCell.textContent == name) 
        {
            quantityInput.addEventListener('input', () => 
            {
                if(quantityInput.value < 0)
                {
                    quantityInput.value = 0;
                };
            });
            quantityInput.value++;  //value = 1,2,3...N (按下次數)
            //小計 = 單價＊數量, 最後把小計用textContent轉成文字內容且加上“＄”
            itemTotalCostCell.textContent = `$${(itemCostCell.textContent.replace('$', '') * quantityInput.value)}`;
            //總價 = 小計轉數字的累加值
            resultPrice += Number(itemCostCell.textContent.replace('$', ''));
            //把最後輸出的總價轉成數字並加上“＄”
            totalPrice.textContent = `$${resultPrice.toFixed(2)}`;
        }
    });
}

// 購物車列表
function addTableRow(tdName, tdItemCost, tdItemTotalCost, btnDelName)
{
    const el = document.createElement("tr");
    el.innerHTML = 
    `<td>${tdName}</td>
    <td><input type="number" class="quantity" value="1" /></td>
    <td>$${tdItemCost}</td>
    <td>$${tdItemTotalCost}</td>
    <td>
        <button class="remove-item-btn btn btn-danger btn-sm btn-${btnDelName}-del">
            <i class="fas fa-trash-alt"></i>
        </button>
    </td>`;
    tbody.appendChild(el);
    //第一次按下的總價
    resultPrice += tdItemTotalCost;
    totalPrice.textContent = `$${resultPrice.toFixed(2)}`;

    const btnDel = document.querySelector(`.btn-${btnDelName}-del`);
    btnDel.addEventListener('click', () =>
    {
        delTableRow(`${tdName}`);    
    }); 
}

// 刪除的btn
function delTableRow(tdName)
{
    const rows = tbody.querySelectorAll("tr");
    rows.forEach((row) => 
    {
        const nameCell = row.querySelector("td:nth-child(1)"); //td:nth-child(1)意即欄位1：項目
        let itemTotalCostCell = row.querySelector("td:nth-child(4)"); //td:nth-child(4)意即欄位4：小計
        if (nameCell.textContent == `${tdName}`) 
        {
            row.remove();
            resultPrice -= Number(itemTotalCostCell.textContent.replace('$', ''));
            totalPrice.textContent = `$${resultPrice.toFixed(2)}`;
        }
    });
}

// 小貓個資
function addCatCart(index)
{
    let btnBossDel = document.querySelector(".btn-boss-del");
    let btnCowryDel = document.querySelector(".btn-cowry-del");
    let btnTigerDel = document.querySelector(".btn-tiger-del");
    let btnFatDel = document.querySelector(".btn-fat-del");
    let btnFlowerDel = document.querySelector(".btn-flower-del");
    let btnBFDel = document.querySelector(".btn-BF-del");

    if(index == 0)
    {
        if(btnBossDel)
        {
            counterItems("老大");
        }
        else
        {
            addTableRow("老大", 20, 20, "boss");

        }
    }
    else if(index == 1)
    { 
        if(btnCowryDel)
        {
            counterItems("貝貝");
        }
        else
        {
            addTableRow("貝貝", 15, 15, "cowry");
        }
    }
    else if(index == 2)
    {
        if(btnTigerDel)
        {
            counterItems("老虎");
        }
        else
        {
            addTableRow("老虎", 10, 10, "tiger");
        }
    }
    else if(index == 3){
        if(btnFatDel)
        {
            counterItems("胖胖");
        }
        else
        {
            addTableRow("胖胖", 8.5, 8.5, "fat");
        }
    }
    else if(index == 4)
    {
        if(btnFlowerDel)
        {
            counterItems("小花");
        }
        else
        {
            addTableRow("小花", 9.99, 9.99, "flower");
        }
    }
    else if(index == 5)
    {
        if(btnBFDel)
        {
            counterItems("黑臉");
        }
        else
        {
            addTableRow("黑臉", 12.5, 12.5, "BF");
        }
    }
}
