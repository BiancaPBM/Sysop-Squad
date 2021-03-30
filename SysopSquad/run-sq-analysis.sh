#!/bin/bash

dotnet tool install --global dotnet-sonarscanner
dotnet sonarscanner begin -d:sonar.verbose=true -k:'Sysop-Squad-Backend' -o:'blue-team' -d:sonar.login='6667155c4892b8e739ffd2cab86cd039b61c258e' -d:sonar.host.url='https://sonarcloud.io'

dotnet build ./SysopSquad.sln
dotnet test ./SysopSquad.sln

dotnet sonarscanner end -d:sonar.login='6667155c4892b8e739ffd2cab86cd039b61c258e' 
