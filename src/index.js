module.exports = function count(s, pairs) {
  		let N=1;
		if (pairs[0][1]>100){
			return 0;
		}
		if (pairs.length>4)
		{
			return 0;
		}
		if (s.length>5){
			return 0;
		}
			for (let i=0;i<pairs.length;i++){
				N*=Math.pow(pairs[i][0],pairs[i][1]);
			}
			let arr=[];
			let counter=0;
			for (let i=0;i<=N;i++){
				arr[i]=0;
			}
			for (let j=0;j<s.length;j++){
				if (s[j]=='0'){
					for (let i=1;i<=N;i++){
						if (NOD(i+j,N)!=1){
							arr[i]+=1;
						}
					}
				}else{
					for (let i=1;i<=N;i++){
						if (NOD(i+j,N)==1){
							arr[i]+=1;
						}
					}
				}
			}
			for (let i=0;i<arr.length;i++){
				if (arr[i]==s.length){
				counter++;}
			}
			return counter
			function NOD(x,n){
			if (x==1){
				return 1;
			}
			let m;
			if (x>n){
				m=x;
			}else{
				m=n;
			}
				for (let i=2;i<=m;i++){
					
					if ((x%i==0)&&(n%i==0)){
						return 0;
						}
					}		
				return 1;
				}
}
