using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Account.Microservice.Model;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace Account.Microservice.Controllers
{
  [Route("api/account")]
  [ApiController]
  public class AuthenticationController : ControllerBase
  {
    private readonly IConfiguration _configuration;
    private readonly IWebHostEnvironment _env;

    public AuthenticationController(IConfiguration configuration, IWebHostEnvironment env)
    {
      _configuration = configuration;
      _env = env;
    }

    [HttpGet]
    public JsonResult Get()
    {
      string query = @"
                    select Id, Name, Username, Password
                    from dbo.Authentication
                    ";
      DataTable table = new DataTable();
      string sqlDataSource = _configuration.GetConnectionString("AuthenticationAppCon");
      SqlDataReader myReader;
      using (SqlConnection myCon = new SqlConnection(sqlDataSource))
      {
        myCon.Open();
        using (SqlCommand myCommand = new SqlCommand(query, myCon))
        {
          myReader = myCommand.ExecuteReader();
          table.Load(myReader); ;

          myReader.Close();
          myCon.Close();
        }
      }

      return new JsonResult(table);
    }

    [HttpPost]
    public JsonResult Post(Authentication authentication)
    {
      string query = @"
                    insert into dbo.Authentication 
                    (Name,Username,Password)
                    values 
                    (
                    '" + authentication.Name + @"'
                    ,'" + authentication.Username + @"'
                    ,'" + authentication.Password + @"'
                    )
                    ";
      DataTable table = new DataTable();
      string sqlDataSource = _configuration.GetConnectionString("AuthenticationAppCon");
      SqlDataReader myReader;
      using (SqlConnection connection = new SqlConnection(sqlDataSource))
      {
        connection.Open();
        using (SqlCommand myCommand = new SqlCommand(query, connection))
        {
          myReader = myCommand.ExecuteReader();
          table.Load(myReader); ;

          myReader.Close();
          connection.Close();
        }
      }

      return new JsonResult("Added Successfully");
    }


  }
}
