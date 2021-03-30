using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TicketHandling.Microservice.Data;
using TicketHandling.Microservice.Model;

namespace TicketHandling.Microservice.Controllers
{
  [ApiController]
  [Route("api/v1/[controller]")]
  

    public class TicketsController : ControllerBase
    {
        private readonly ITicketRepository _repository;

        public TicketsController(ITicketRepository repository)
        {
          _repository = repository;
        }

    [HttpGet]
        public async Task<IEnumerable<Ticket>> Get()
        {
          return await _repository.GetAll();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetById(string id)
        {
          Ticket ticket = await _repository.GetById(id);
          if (ticket == null)
          {
            return NotFound();
          }
          return ticket;
        }
        [HttpGet("rank")]
        public async Task<IEnumerable<Ticket>> OrderByReview()
        {
          return await _repository.OrderByReview();
        }

        [HttpPost]
        public async Task<IActionResult> Insert(Ticket ticket)
        {
          await _repository.AddTicket(ticket);
          return CreatedAtAction("GetById", new { id = ticket.Id }, ticket);
        }   

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Ticket ticket)
        {
          if (id != ticket.Id)
          {
            return BadRequest();
          }

          Ticket requestedTicket = await _repository.GetById(id);
          if (requestedTicket == null)
          {
            return NotFound();
          }
          await _repository.UpdateTicket(id, ticket);
          return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
          Ticket requestedTicket = await _repository.GetById(id);
          if (requestedTicket == null)
          {
            return NotFound();
          }
          await _repository.DeleteTicket(id);
          return NoContent();
        } 
  }
  }


