using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TicketHandling.Microservice.Model;

namespace TicketHandling.Microservice.Data
{
  public class TicketRepository : ITicketRepository
  {
    private readonly DataContext _context;
    public TicketRepository(ITicketsDatabaseSettings settings)
    {
      _context = new DataContext(settings);
    }

    public async Task AddTicket(Ticket ticket)
    {
      try
      {
        await _context.Tickets.InsertOneAsync(ticket);
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
      }
    }

    public async Task DeleteTicket(string id)
    {
      try
      {
        await _context.Tickets.DeleteOneAsync(ticket => ticket.Id == id);
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
      }
    }

    public async Task<IEnumerable<Ticket>> GetAll()
    {
      try
      {
        return await _context.Tickets.Find(ticket => true).ToListAsync();
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        return new List<Ticket>();
      }
    }

    public async Task<Ticket> GetById(string id)
    {
      try
      {
        return await _context.Tickets
                        .Find(ticket => ticket.Id == id)
                        .FirstOrDefaultAsync();
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        return new Ticket();
      }
    }

    public async Task UpdateTicket(string id, Ticket ticket)
    {
      try
      {
        await _context.Tickets.ReplaceOneAsync(tick => tick.Id == id, ticket);
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
      }
    }
    public async Task<IEnumerable<Ticket>> OrderByReview()
    {
      try
      {
        return await _context.Tickets.Find(ticket => true)
            .SortByDescending(ticket => ticket.Rating).Limit(10)
            .ToListAsync();
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        return new List<Ticket>();
      }
    }
  }
}
