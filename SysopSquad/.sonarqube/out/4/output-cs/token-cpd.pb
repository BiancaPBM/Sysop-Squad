?
7C:\TSP.NET\Sysop-Squad\SysopSquad\SysopSquad\Program.cs
	namespace 	

SysopSquad
 
{ 
public 
class	 
Program 
{ 
public		 
static		 
void		 
Main		 
(		  
string		  &
[		& '
]		' (
args		) -
)		- .
{

 	
CreateHostBuilder 
( 
args "
)" #
.# $
Build$ )
() *
)* +
.+ ,
Run, /
(/ 0
)0 1
;1 2
} 	
public 

static 
IHostBuilder 
CreateHostBuilder 0
(0 1
string1 7
[7 8
]8 9
args: >
)> ?
=>@ B
Host 
.  
CreateDefaultBuilder !
(! "
args" &
)& '
. $
ConfigureWebHostDefaults %
(% &

webBuilder& 0
=>1 3
{ 

webBuilder 
. 

UseStartup #
<# $
Startup$ +
>+ ,
(, -
)- .
;. /
} 
) 
. %
ConfigureAppConfiguration (
(( )
() *
hostingContext* 8
,8 9
config: @
)@ A
=>B D
{ 
config 
. 
AddJsonFile  
(  !
$str! .
). /
;/ 0
} 
) 
; 
} 
} ?)
7C:\TSP.NET\Sysop-Squad\SysopSquad\SysopSquad\Startup.cs
	namespace 	

SysopSquad
 
{ 
public 
class	 
Startup 
{ 
public 
Startup 
( 
IConfiguration %
configuration& 3
)3 4
{ 	
Configuration 
= 
configuration )
;) *
} 	
public 
IConfiguration 
Configuration +
{, -
get. 1
;1 2
}3 4
public 
void 
ConfigureServices %
(% &
IServiceCollection& 8
services9 A
)A B
{ 	
services 
. 
	AddOcelot 
( 
)  
;  !
services 
. 
AddCors 
( 
c 
=> !
{ 
c   
.   
	AddPolicy   
(   
$str   '
,  ' (
options  ) 0
=>  1 3
options  4 ;
.  ; <
AllowAnyOrigin  < J
(  J K
)  K L
)  L M
;  M N
}!! 
)!! 
;!! 
var"" 
key"" 
="" 
Encoding"" 
."" 
UTF8"" #
.""# $
GetBytes""$ ,
("", -
$str""- H
)""H I
;""I J
services## 
.## 
AddAuthentication## &
(##& '
x##' (
=>##) +
{$$ 
x%% 
.%% %
DefaultAuthenticateScheme%% )
=%%* +
JwtBearerDefaults%%, =
.%%= > 
AuthenticationScheme%%> R
;%%R S
x&& 
.&& "
DefaultChallengeScheme&& &
=&&' (
JwtBearerDefaults&&) :
.&&: ; 
AuthenticationScheme&&; O
;&&O P
}'' 
)'' 
.'' 
AddJwtBearer'' 
('' 
$str'' )
,'') *
x''+ ,
=>''- /
{(( 
x)) 
.))  
RequireHttpsMetadata)) $
=))% &
false))' ,
;)), -
x** 
.** 
	SaveToken** 
=** 
true**  
;**  !
x++ 
.++ %
TokenValidationParameters++ )
=++* +
new++, /%
TokenValidationParameters++0 I
{,, $
ValidateIssuerSigningKey-- (
=--) *
true--+ /
,--/ 0
IssuerSigningKey..  
=..! "
new..# & 
SymmetricSecurityKey..' ;
(..; <
key..< ?
)..? @
,..@ A
ValidateIssuer// 
=//  
false//! &
,//& '
ValidateAudience00  
=00! "
false00# (
}11 
;11 
}22 
)22 
;22 
services33 
.33 
AddControllers33 #
(33# $
)33$ %
;33% &
services44 
.44 
AddSwaggerGen44 "
(44" #
c44# $
=>44% '
{55 
c66 
.66 

SwaggerDoc66 
(66 
$str66 !
,66! "
new66# &
OpenApiInfo66' 2
{663 4
Title665 :
=66; <
$str66= I
,66I J
Version66K R
=66S T
$str66U Y
}66Z [
)66[ \
;66\ ]
}77 
)77 
;77 
}88 	
public;; 
async;; 
void;; 
	Configure;; #
(;;# $
IApplicationBuilder;;$ 7
app;;8 ;
,;;; <
IWebHostEnvironment;;= P
env;;Q T
);;T U
{<< 	
app==
 
.== 
UseCors== 
(== 
options== 
=>==  
options==! (
.==( )
AllowAnyOrigin==) 7
(==7 8
)==8 9
.==9 :
AllowAnyMethod==: H
(==H I
)==I J
.>> 
AllowAnyHeader>> 
(>> 
)>> 
)>> 
;>> 
await?? 
app?? 
.?? 
	UseOcelot?? 
(?? 
)??  
;??  !
if@@ 
(@@	 

env@@
 
.@@ 
IsDevelopment@@ 
(@@ 
)@@ 
)@@ 
{AA 
appBB 
.BB %
UseDeveloperExceptionPageBB -
(BB- .
)BB. /
;BB/ 0
appCC 
.CC 

UseSwaggerCC 
(CC 
)CC  
;CC  !
appDD 
.DD 
UseSwaggerUIDD  
(DD  !
cDD! "
=>DD# %
cDD& '
.DD' (
SwaggerEndpointDD( 7
(DD7 8
$strDD8 R
,DDR S
$strDDT c
)DDc d
)DDd e
;DDe f
}EE 
appGG 
.GG 
UseHttpsRedirectionGG #
(GG# $
)GG$ %
;GG% &
appII 
.II 

UseRoutingII 
(II 
)II 
;II 
appKK 
.KK 
UseAuthorizationKK  
(KK  !
)KK! "
;KK" #
}NN 
}OO 
}PP 