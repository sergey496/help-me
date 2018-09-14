module.exports = function count(s, pairs) {
		let N=1;
		if(pairs.length>6){
			return 0;	
		}
		for (let i=0;i<pairs.length;i++){
			N*=pairs[i][0];
		}
		
		let counter=0;
		let X;
		
		for (let i=1;i<=N;i++){
			X=0;
			for (let j=0;j<s.length;j++){
				if (s[j]=='0'){
					if (NOD(i+j,N)!=1){
						X+=1;
					}
				}else{
					if (NOD(i+j,N)==1){
						X+=1;
					}
				}
			}
			if (X==s.length){
				counter++;
			}
		}
		
		
		function NOD(n, m) {
		  if(m > 0) { 
			var k = n%m;
			return NOD(m, k); 
		  } 
		  else { 
			return Math.abs(n);  
		  }
		}
		for (let j=0;j<pairs.length;j++){
			for	(let i=1;i<pairs[j][1];i++){
				counter*=pairs[j][0];
				counter=counter%1000000007;
			}	
		}
		
			return counter;

}
