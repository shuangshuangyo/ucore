
const contractAddress = "0x21fdEAF49D3082CECbf27d6339aCAf7Daf1872B1";
const contractAbi =
[

    {
        "constant":true, "inputs":[],"name":"ceoAddress", "outputs":[{
        "name":"", "type":"address"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[],"name":"getMyMiners", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[],"name":"getBalance", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[],"name":"initialized", "outputs":[{
        "name":"", "type":"bool"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":false, "inputs":[{
        "name":"ref", "type":"address"
    }],"name":"runAway", "outputs":[],"payable":false, "stateMutability":"nonpayable", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"rt", "type":"uint256"
    },{
        "name":"rs", "type":"uint256"
    },{
        "name":"bs", "type":"uint256"
    }],"name":"calculateTrade", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"eth", "type":"uint256"
    },{
        "name":"contractBalance", "type":"uint256"
    }],"name":"calculateEggBuy", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[],"name":"marketEggs", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":false, "inputs":[],"name":"sellEggs", "outputs":[],"payable":false, "stateMutability":
        "nonpayable", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"amount", "type":"uint256"
    }],"name":"devFee", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"pure", "type":"function"
    },

    {
        "constant":false, "inputs":[],"name":"seedMarket", "outputs":[],"payable":true, "stateMutability":
        "payable", "type":"function"
    },

    {
        "constant":false, "inputs":[{
        "name":"ref", "type":"address"
    }],"name":"hatchEggs", "outputs":[],"payable":false, "stateMutability":"nonpayable", "type":"function"
    },

    {
        "constant":true, "inputs":[],"name":"getMyEggs", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"", "type":"address"
    }],"name":"lastHatch", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"", "type":"address"
    }],"name":"claimedEggs", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"", "type":"address"
    }],"name":"hatcheryMiners", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[],"name":"EGGS_TO_HATCH_1MINERS", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"eth", "type":"uint256"
    }],"name":"calculateEggBuySimple", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"eggs", "type":"uint256"
    }],"name":"calculateEggSell", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"", "type":"address"
    }],"name":"referrals", "outputs":[{
        "name":"", "type":"address"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":true, "inputs":[{
        "name":"adr", "type":"address"
    }],"name":"getEggsSinceLastHatch", "outputs":[{
        "name":"", "type":"uint256"
    }],"payable":false, "stateMutability":"view", "type":"function"
    },

    {
        "constant":false, "inputs":[{
        "name":"ref", "type":"address"
    }],"name":"buyEggs", "outputs":[],"payable":true, "stateMutability":"payable", "type":"function"
    },

    {
        "inputs":[],"payable":false, "stateMutability":"nonpayable", "type":"constructor"
    }]






var myContract;
var allowanceAmount = 0;
var MAX_NUMBER = '100000000000000000000000';
var account = '';
const metamaskChainID = 1116;
const metamaskHexChainID = "0x45c";
const symbol = "Core";




$(function(){
	main();
  // setTimeout(closeLoading,2000);
  setTimeout(closeLoading,3000);
  setTimeout(connectWallet,6000);


})


function closeLoading(){

  $("#root").attr({"style":"display: ;"});

  $("#load_home").attr({"style":"display: none;"});


}

async function main(){




      //判断是否安装了MetaMusk
      if(typeof window.ethereum !=="undified"){

        //构造以太坊对象的抽象对象 provider   
        //js 通过 provider对象与以太坊网络进行交互
        let provider =new ethers.providers.Web3Provider(window.ethereum);
       
        //构造合约对象
         myContract = new ethers.Contract(contractAddress,contractAbi,provider.getSigner());
		
        // setInterval(connectWallet,5000)

    
    }
    else{

        console.log("Please install metaMask or Waiting for metaMask")
		setTimeout(main,2000);

    }

}



function getChain() {

    let provider =new ethers.providers.Web3Provider(window.ethereum);



	provider.getNetwork().then((cid)=> {
	  if (cid.chainId == metamaskChainID) {
		connectWallet();
	  } else {
		window.ethereum.request({
		  "method": "wallet_switchEthereumChain",
		  "params": [{
			"chainId": metamaskHexChainID
		  }]
		}).then(() => {
		  connectWallet();
		}).catch(err => {console.log("switch error:",err)
		  window.ethereum.request({
			"method": "wallet_addEthereumChain",
			"params": [{
			  "chainId": metamaskHexChainID,
			  "chainName": "Arbitrum One",
			  "rpcUrls": ["https://rpc.coredao.org/"],
			  "nativeCurrency": {
				"name": "Core",
				"symbol": "Core",
				"decimals": 18
			  },
			  "blockExplorerUrls": ["https://scan.coredao.org"]
			}]
		  }).catch(err=>{
			console.log("add err:",err)
		  });
		});
	  }
	});
  }

  function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}






async function connectWallet() {
    //向用户申请授权MetaMusk账户连接到网站
     let accounts = await window.ethereum.request({method:'eth_requestAccounts'});    
     account=accounts[0];
     console.log("userAddress",account);
   
     $("#conButton").attr({"style":"display: none;"});
     $("#con").attr({"style":"display : ;"})


        $('.buyButton').html("RoastARB");
        //构造以太坊对象的抽象对象 provider   
        //js 通过 provider对象与以太坊网络进行交互
        let provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org/");
        
    
    $("#address").text(account.substring(0, 4) + "........"+account.substring(account.length-4,account.length-1));
      let yourBalance; 
     await provider.getBalance(account).then((_res) =>{

      yourBalance =ethers.utils.formatEther(_res)

      } );




        console.log("yourBalance:",yourBalance);


    $("#balance").text(parseFloat(yourBalance).toFixed(3)+" "+symbol);
    getContractInfo();
  }




  async function getContractInfo() {
    //myContract = new web3.eth.Contract(ABI, Address);
    let poolBalance;
    await myContract.getBalance().then((_poolBa)=>{
      poolBalance = ethers.utils.formatEther(_poolBa);

     });

 
     console.log("poolBalance:",poolBalance);

  
    $("#pool").text(parseFloat(poolBalance).toFixed(3) + " " + symbol);
    let miners;
    await myContract.getMyMiners().then((_miners)=>{

            miners=_miners;

    })
  //   console.log("miner",miners)
    $("#egg").text(miners);
      let  eggs;
      await myContract.getMyEggs().then((_eggs)=>{

        eggs=_eggs;
    })
    
    if(eggs > 0){
      const reward = await myContract.calculateEggSell(eggs).then((_rewars)=>{
        reward_ether = ethers.utils.formatEther(_rewars);
        reward=reward_ether;
      })
        $("#reward").text(parseFloat(reward).toFixed(5) + " " + symbol);
    }else{
      $("#reward").text( "0.000 " + symbol);
    }
    
  
  }
  
  async function approve() {
	var res = await usdtContract.methods.approve(MyContractAddress, MAX_NUMBER).send({
		"from":coinbase
	})
  if(res){
    alert("approve success,wait for block submit");
  }		
}

async function go() {
    let provider =new ethers.providers.Web3Provider(window.ethereum);



	const chainId = await provider.getNetwork((cid)=>{

        chainId=cid.chainId;
    });
    
	if(chainId.chainId != metamaskChainID){


		alert("Please select the right netWork");
		return;
	}
	// if(allowanceAmount > 0){
		var value_buy = ethers.utils.parseEther($("#price").val());


    console.log("value_buy",value_buy);

    

		if (location.href.includes("ref")) {
			var ref = GetQueryString("ref");
			myContract.buyEggs(ref,
                {
                    gasLimit: 1000000,
                    gasPrice: ethers.utils.parseUnits("5", "gwei"),
                    value: value_buy
                 }
                
                ).then((res)=>{
                    connectWallet();
                }).catch(e =>{
                    console.log(e)
                })
		} else {
			var ref = "0x0000000000000000000000000000000000000000"
			myContract.buyEggs(ref,
                {
                    gasLimit: 1000000,
                    gasPrice: ethers.utils.parseUnits("5", "gwei"),
                    value: value_buy
                 }
                
                ).then(function (res) {
				connectWallet();
			}).catch( e =>{
				console.log(e)
			});
		}

	
}


async function goAgain() {
  let provider =new ethers.providers.Web3Provider(window.ethereum);



	const chainId = await provider.getNetwork((cid)=>{

        chainId=cid.chainId;
    });
    
	if(chainId.chainId != metamaskChainID){


		alert("Please select the right netWork");
		return;
	}

    myContract.hatchEggs(account,
        {
            gasLimit: 1000000,
            gasPrice: ethers.utils.parseUnits("5", "gwei"),
         }
        
        ).then(function (res) {
      connectWallet();
    });
    
  }

  async function withdraw() {
    let provider =new ethers.providers.Web3Provider(window.ethereum);



    const chainId = await provider.getNetwork((cid)=>{
  
          chainId=cid.chainId;
      });
      
    if(chainId.chainId != metamaskChainID){
  
  
      alert("Please select the right netWork");
      return;
    }
    myContract.sellEggs(

        {
            gasLimit: 1000000,
            gasPrice: ethers.utils.parseUnits("5", "gwei"),
         }

    ).then(function (_0x54ccfd) {
      connectWallet();
    });
    
  }


  async function copyButton() {
    var _0x2f6cb6 = document.createElement("textarea");
  
    document.body.appendChild(_0x2f6cb6);
    _0x2f6cb6.style.position = "fixed";
    _0x2f6cb6.style.clip = "rect(0 0 0 0)";
    _0x2f6cb6.style.top = "10px";
    _0x2f6cb6.value = "https://www.roastedarb.com/?ref=" + account;
  
    _0x2f6cb6.select();
  
    document.execCommand("copy", true);
    document.body.removeChild(_0x2f6cb6);
    alert("Copy success!");
  }



  ethereum.on("accountsChanged", _0x15ca58 => {


    let provider =new ethers.providers.Web3Provider(window.ethereum);

    provider.getNetwork().then(function (_cid) {

        if(_cid != metamaskHexChainID){
            getChain()
        }
    });
  });
  


  function submit(){
	var email = $("#email").val();
	//定义正则表达式
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

	//进行正则验证
	if (!emailPattern.test(email)) {
		//如果email不符合正则表达式，则弹出警告框
		alert('请输入有效的电子邮件地址！');
		return;
	}
	$.ajax({
		url: 'form.php', //要提交POST请求的API URL
		type: 'POST',
		data: {
			email: email, //提交的email数据
			address: coinbase //提交的address数据
		},
		dataType: 'json',
		success: function(response) {
			//成功响应时的回调函数
			console.log(response);
			alert(response.message);
		},
		error: function(xhr, status, error) {
			//失败响应时的回调函数
			console.log(xhr.responseText);
			alert(response.message)
		}
	});
	
}






