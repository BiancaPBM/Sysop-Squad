using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using TicketHandling.Microservice.Controllers;
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
    public async void TicketRepository_Create_NullTicket_Failure()
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

    [Fact]
    public async void GetAllTickets_Returns_All_Tickets()
    {
      // arrange
      var repositoryMock = new Mock<ITicketRepository>();
      var tickets = new List<Ticket>
            {   new Ticket { Id = "1234", Description = "blue screen on hp laptop " , User = "Simone" , Agent = "Bianca"}
            };
      repositoryMock.Setup(x => x.GetAll()).ReturnsAsync(tickets);
      var ticketLogic = new TicketsController(repositoryMock.Object);
      var expectedResult = new List<Ticket>
            {   new Ticket {  Id = "1234", Description = "blue screen on hp laptop " , User = "Simone" , Agent = "Bianca"}
            };

      // act
      var result = await ticketLogic.Get();


      // assert
      result.Equals(expectedResult);

    }

    [Fact]
    public async void GetAllTickets_Returns_No_Tickets()
    {
      // arrange
      var repositoryMock = new Mock<ITicketRepository>();
      var tickets = new List<Ticket> { };

      repositoryMock.Setup(x => x.GetAll()).ReturnsAsync(tickets);

      var ticketLogic = new TicketsController(repositoryMock.Object);
      var expectedResult = new List<Ticket> { };

      // act
      var result = await ticketLogic.Get();


      // assert
      result.Equals(expectedResult);
    }

    
  }
}
