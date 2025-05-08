from datetime import datetime

# Define event structure
class Event:
    def __init__(self, name, data):
        self.name = name
        self.data = data
        self.timestamp = datetime.now()

# Event Processor
class EventProcessor:
    def __init__(self):
        self.handlers = {}

    def register_handler(self, event_name, handler):
        self.handlers[event_name] = handler

    def process(self, event):
        handler = self.handlers.get(event.name)
        if handler:
            handler(event)
        else:
            print(f"No handler registered for event: {event.name}")

# Sample Handlers
def user_login_handler(event):
    print(f"[{event.timestamp}] User logged in: {event.data['username']}")

def order_placed_handler(event):
    print(f"[{event.timestamp}] Order placed: ID {event.data['order_id']}")

# Main Program
if __name__ == "__main__":
    processor = EventProcessor()
    
    # Register event handlers
    processor.register_handler("user_login", user_login_handler)
    processor.register_handler("order_placed", order_placed_handler)
    
    # Emit events
    processor.process(Event("user_login", {"username": "jane_doe"}))
    processor.process(Event("order_placed", {"order_id": 12345}))
    processor.process(Event("unknown_event", {}))
