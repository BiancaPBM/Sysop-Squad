namespace TicketHandling.Microservice.Model
{
  public class TicketsDatabaseSettings : ITicketsDatabaseSettings
  {
    public string TicketsCollectionName { get; set; }
    public string ConnectionString { get; set; }
    public string DatabaseName { get; set; }


  }

  public interface ITicketsDatabaseSettings
  {
    string TicketsCollectionName { get; set; }
    string ConnectionString { get; set;}
    string DatabaseName { get; set; }
  }
}
