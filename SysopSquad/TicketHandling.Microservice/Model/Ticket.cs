using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace TicketHandling.Microservice.Model
{
  [BsonIgnoreExtraElements]
  public class Ticket
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string IdUser { get; set; }
    public string Username { get; set; }
    public string IdAgent { get; set; }
    public string Agent { get; set; }
    public string IdProduct { get; set; }
    public Status Status { get; set; }
    public string City { get; set; }
    public string State { get; set; }

  }
}
