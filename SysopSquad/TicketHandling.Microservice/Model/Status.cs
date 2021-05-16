using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketHandling.Microservice.Model
{
  public enum Status
  {
    New = 1,
    Active = 2,
    Resolved = 3,
    Closed = 4
  }
}
