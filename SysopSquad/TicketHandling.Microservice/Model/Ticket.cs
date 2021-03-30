using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace TicketHandling.Microservice.Model
{
  [BsonIgnoreExtraElements]
  public class Ticket
  {
    internal object x;

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string Id { get; set; }
    public string Description { get; set; }
    public string User { get; set; }
    public string Agent { get; set; }

    [BsonElement("Runtime (Minutes)")]
    public int Runtime { get; set; }
    public double Rating { get; set; }
    public int Reviews { get; set; }

  }
}
