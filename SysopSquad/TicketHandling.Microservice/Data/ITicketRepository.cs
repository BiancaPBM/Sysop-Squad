using System.Collections.Generic;
using System.Threading.Tasks;
using TicketHandling.Microservice.Model;

namespace TicketHandling.Microservice.Data
{
 public interface ITicketRepository
  {
    Task<IEnumerable<Ticket>> GetAll();
    Task<Ticket> GetById(string id);
    Task<IEnumerable<Ticket>> OrderByReview();

    Task AddTicket(Ticket ticket);
    Task UpdateTicket(string id, Ticket ticket);
    Task DeleteTicket(string id);

  }
}
