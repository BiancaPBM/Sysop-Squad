using Moq;
using System;
using TicketHandling.Microservice.Data;
using TicketHandling.Microservice.Model;
using Xunit;

namespace TicketRepositoryTests
{
  public class TicketRepositoryTests
  {
    private readonly Mock<ITicketsDatabaseSettings> _mockContext;
    public TicketRepositoryTests()
    {
      _mockContext = new Mock<ITicketsDatabaseSettings>();
    }

    [Fact]
    public async void TicketRepository_Create_NullUser_Failure()
    {
      // Arrange
      Ticket _ticket = null;

      //Act 
      _mockContext.Setup((p => p.TicketsCollectionName)).Returns("tickets");
      _mockContext.Setup((p => p.ConnectionString)).Returns("mongodb://localhost:27017");
      _mockContext.Setup((p => p.DatabaseName)).Returns("TicketHandling");
      var ticketRepository = new TicketRepository(_mockContext.Object);

      // Assert
      await Assert.ThrowsAsync<ArgumentNullException>(() => ticketRepository.AddTicket(_ticket));
    }

  }
}
