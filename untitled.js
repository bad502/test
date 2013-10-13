
	var masName = new Array();
	var mas = new Array();

	var temp = document.getElementById("Masive");

	var out = document.getElementById("Info");
		
	var masNS = new Array();

	var bool = 0;

	function Build(){
		if (thstmp1.selectedIndex != -1){
  			var ind = thstmp1.selectedIndex;
		}
		masG[masNG[ind]].sort();
		bool = ind;
		temp.innerHTML = "";
		for (var i = 0; i < masG[masNG[ind]].length; i++) 
		temp.innerHTML = temp.innerHTML + "<option>" + masG[masNG[ind]][i] + "</option>";
	};

	function Buildserch(){
		masNS.sort();
		temp.innerHTML = "";
		for (var i = 0; i < masNS.length; i++) 
		temp.innerHTML = temp.innerHTML + "<option>" + masNS[i] + "</option>";
	};

	function Searcht(){
		str = document.tform.Search.value;
		
		if(str == ''){
			masNS.splice(0, masNS.length);
			Build();
		}
		else{
		for(var i = 0; i < masG[masNG[bool]].length; i++){
			if(masG[masNG[bool]][i].indexOf(str) != -1){
				masNS[masNS.length] = masG[masNG[bool]][i];
			}
		};
		Buildserch();
		}
	};

	function Add(){document.getElementById("Addt").style.display = "table";}

	function Push(){
		var Nm = document.tform.Name.value;
		var Sr = document.tform.Email.value;
		var Numb = document.tform.CNumber.value;
		if(Nm == ""){
			document.getElementById("Addt").style.display = "none";
			return;
		}

		var obj = new Object();

		obj.Email = Sr;
		obj.Numb = Numb;
		obj.NumbGroup = 0;
		masName[masName.length] = Nm;
		mas[Nm] = obj;

		document.tform.Name.value = "";
		document.tform.Email.value = "";
		document.tform.CNumber.value = "";

		Build();
		document.getElementById("Addt").style.display = "none";
	}

	function Select(){
		if ( temp.selectedIndex != -1){
  			ind = temp.selectedIndex;
  			texti = temp.options[ind].text;
		out.innerHTML = "Name: " + texti + "</br>Email:  " + mas[texti].Email + "</br>Number: " + mas[texti].Numb;
		}
	}

	function Del(){
		mas.splice(texti, 1);
		for (var i = 0; i < masName.length; i++) {
			if(masName[i] == texti){
				masName.splice(i, 1);
				break;
			}
		};

		if (thstmp1.selectedIndex != -1){
  			indG = thstmp1.selectedIndex;

		for (var i = 0; i < masG[masNG[indG]].length; i++) {
			if(masG[masNG[indG]][i] == texti){
				masG[masNG[indG]].splice(i, 1);
				break;
			}
		};
		Build();
		out.innerHTML = "Name:</br>Email:</br>Number:";
		}
	}

	function Edit(){
		var tmp = document.getElementById("Editt");
		tmp.style.display = "table";
		document.tform.EName.value = texti;
		document.tform.EEmail.value = mas[texti].Email;
		document.tform.ECNumber.value = mas[texti].Numb;
	}

	function rEdit(){
		var Nm = document.tform.EName.value;
		if(Nm == ""){
			document.getElementById("Editt").style.display = "none";
			return;
		}
		Del();

		var obj = new Object();
		obj.Email = document.tform.EEmail.value;
		obj.Numb = document.tform.ECNumber.value;
		masName[masName.length] = Nm;
		mas[Nm] = obj;

		for (var i = 1; i < masNG.length; i++) {
			for (var j = 0; j < masG[masNG[i]].length; j++) {
				if(masG[masNG[i]][j] == texti){
					masG[masNG[i]][j] = Nm;
				}
			};
		};

		if(indG != 0)
			masG[masNG[indG]][masG[masNG[indG]].length] = Nm;

		document.getElementById("Editt").style.display = "none";
		Build();
	}

	masNG = new Array();
	masG = new Array();
	masNG[0] = "All contacts"; 
	var thstmp = document.getElementById("Gropadder");
	var thstmp1 = document.getElementById("MasGroupS");
	var thstmp2 = document.getElementById("PoleAdd");

	function AddGroup(){
		thstmp.style.display = "table";
	}

	function AddToGroup(){
		document.getElementById("toGropadder").style.display = "table";
	}

	function AddToGroupG(){
		if (temp.selectedIndex != -1){
  			var ind = temp.selectedIndex;
			var texti = temp.options[ind].text;
		var temp1 = document.getElementById("MasGroupG");
		if (temp1.selectedIndex != -1) {
			var indG = temp1.selectedIndex;
		
		if(mas[texti].NumbGroup != 0){
			for(i=0; i < masG[masNG[mas[texti].NumbGroup]].length; i++)
				if( masG[masNG[mas[texti].NumbGroup]][i] == texti){
					masG[masNG[mas[texti].NumbGroup]].splice(i, 1);	
				}
		}
		mas[texti].NumbGroup = indG;
		masG[masNG[indG]][masG[masNG[indG]].length] = texti;
		
		temp1.options[0].selected = "true";
		document.getElementById("toGropadder").style.display = "none";
			}
		}
		Build();
	}

	function BuildGroup () {
		masG["All contacts"] = masName;
		thstmp1.innerHTML = "";
		for (var i = 0; i < masNG.length; i++) 
		thstmp1.innerHTML = thstmp1.innerHTML + "<option>" + masNG[i] + "</option>";
		document.getElementById("MasGroupG").innerHTML = thstmp1.innerHTML;	
	}

	function AddGroupG(){
		if(thstmp2.value == ""){
			thstmp.style.display = "none";
			return;
		}
		masNG[masNG.length] = thstmp2.value;
		masG[masNG[masNG.length -1 ]] = new Array();
		BuildGroup();
		thstmp2.value = "";
		thstmp.style.display = "none";
	}

	function DeleteGroup(){
		var temp1 = document.getElementById("MasGroupS");
		if (temp1.selectedIndex != -1 && temp1.selectedIndex != 0) {
			var indG = temp1.selectedIndex;
			masG.splice(masNG[indG], 1);
			masNG.splice(indG);
			BuildGroup();
			Build();
		}
	}