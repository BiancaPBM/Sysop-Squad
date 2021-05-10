using MongoDB.Driver;
using TicketHandling.Microservice.Model;

namespace TicketHandling.Microservice.Data
{
  public class DataContext
  {
    public DataContext(ITicketsDatabaseSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      Tickets = database.GetCollection<Ticket>(settings.TicketsCollectionName);
    }

    public IMongoCollection<Ticket> Tickets { get; }
  }
}
