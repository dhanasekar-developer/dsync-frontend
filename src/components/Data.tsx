import type { UserChatInterface, UserPreviewInterface } from "./interfaces";

export const usersData: UserPreviewInterface[] = [
  { "id": 1, "name": "John Carter", "msg": "Never!", "received_at": "2026-03-22 09:47:00", "time": "09:47 AM", "active": true, "unread": 10 },
  { "id": 2, "name": "Emily Stone", "msg": "Bye 👋", "received_at": "2026-03-22 10:47:00", "time": "10:47 AM", "active": false, "unread": 10 },
  { "id": 3, "name": "Michael Chen", "msg": "👍", "received_at": "2026-03-22 11:32:00", "time": "11:32 AM", "active": false, "unread": 7 },
  { "id": 4, "name": "Sarah Williams", "msg": "Will do! 👌", "received_at": "2026-03-22 01:27:00", "time": "01:27 PM", "active": false, "unread": 6 },
  { "id": 5, "name": "David Kumar", "msg": "Nice! Looking forward to it.", "received_at": "2026-03-22 02:22:00", "time": "02:22 PM", "active": false, "unread": 5 },
  { "id": 6, "name": "Jessica Lee", "msg": "Will do!", "received_at": "2026-03-22 03:22:00", "time": "03:22 PM", "active": false, "unread": 5 },
  { "id": 7, "name": "Robert Taylor", "msg": "Thanks Robert! 🙌", "received_at": "2026-03-22 04:22:00", "time": "04:22 PM", "active": false, "unread": 5 },
  { "id": 8, "name": "Amanda Foster", "msg": "See you! 👋", "received_at": "2026-03-22 05:20:00", "time": "05:20 PM", "active": false, "unread": 4 },
  { "id": 9, "name": "James Wilson", "msg": "Will do. Thanks James!", "received_at": "2026-03-22 06:25:00", "time": "06:25 PM", "active": false, "unread": 6 },
  { "id": 10, "name": "Olivia Martinez", "msg": "Can't wait! 🎉", "received_at": "2026-03-22 07:22:00", "time": "07:22 PM", "active": false, "unread": 5 },

  { "id": 11, "name": "Daniel Kim", "msg": "Will do. Good work!", "received_at": "2026-03-22 08:20:00", "time": "08:20 AM", "active": false, "unread": 5 },
  { "id": 12, "name": "Sophia Garcia", "msg": "Will do! 📊", "received_at": "2026-03-22 09:47:00", "time": "09:47 AM", "active": false, "unread": 4 },
  { "id": 13, "name": "William Zhang", "msg": "Anytime! 🚀", "received_at": "2026-03-22 10:47:00", "time": "10:47 AM", "active": false, "unread": 4 },
  { "id": 14, "name": "Emma Thompson", "msg": "Will do! 😊", "received_at": "2026-03-22 11:35:00", "time": "11:35 AM", "active": false, "unread": 4 },
  { "id": 15, "name": "Lucas Rodriguez", "msg": "See you there!", "received_at": "2026-03-22 12:17:00", "time": "12:17 PM", "active": false, "unread": 4 },
  { "id": 16, "name": "Mia Johnson", "msg": "You too! 💰", "received_at": "2026-03-22 01:47:00", "time": "01:47 PM", "active": false, "unread": 4 },
  { "id": 17, "name": "Ethan Brown", "msg": "Looking forward to it! 🎯", "received_at": "2026-03-22 02:32:00", "time": "02:32 PM", "active": false, "unread": 4 },
  { "id": 18, "name": "Isabella Clark", "msg": "You're welcome! 📱", "received_at": "2026-03-22 03:32:00", "time": "03:32 PM", "active": false, "unread": 4 },
  { "id": 19, "name": "Alexander Wright", "msg": "Sounds good! Thanks Alex.", "received_at": "2026-03-22 04:50:00", "time": "04:50 PM", "active": false, "unread": 4 },
  { "id": 20, "name": "Charlotte Davis", "msg": "You too! 🌟", "received_at": "2026-03-22 06:10:00", "time": "06:10 PM", "active": false, "unread": 4 }
]



export const chatData: UserChatInterface[] = [
  {
    "sender": { "id": 1, "name": "John Carter" },
    "messages": [
      { "id": 1, "isYou": false, "time": "09:00 AM", "text": "Hey John, did you finish the report?" },
      { "id": 2, "isYou": true, "time": "09:02 AM", "text": "Yes, I submitted it this morning." },
      { "id": 3, "isYou": false, "time": "09:05 AM", "text": "Great! I'll review it shortly." },
      { "id": 4, "isYou": true, "time": "09:07 AM", "text": "Let me know if any changes needed." },
      { "id": 5, "isYou": false, "time": "09:10 AM", "text": "Sure, I'll update you." },
      { "id": 6, "isYou": true, "time": "09:12 AM", "text": "Thanks 👍" },
      { "id": 7, "isYou": false, "time": "09:15 AM", "text": "Also, meeting at 3 PM today." },
      { "id": 8, "isYou": true, "time": "09:17 AM", "text": "Got it, I'll join." },
      { "id": 9, "isYou": false, "time": "09:20 AM", "text": "Prepare the slides please." },
      { "id": 10, "isYou": true, "time": "09:22 AM", "text": "Working on it." },
      { "id": 11, "isYou": false, "time": "09:25 AM", "text": "Sharing reference doc", "link": "https://example.com/doc1" },
      { "id": 12, "isYou": true, "time": "09:27 AM", "text": "Received." },
      { "id": 13, "isYou": false, "time": "09:30 AM", "text": "Add last quarter data too." },
      { "id": 14, "isYou": true, "time": "09:32 AM", "text": "Sure, will include." },
      { "id": 15, "isYou": false, "time": "09:35 AM", "text": "Anything else?" },
      { "id": 16, "isYou": true, "time": "09:37 AM", "text": "No, that's all." },
      { "id": 17, "isYou": false, "time": "09:40 AM", "text": "Okay, see you later." },
      { "id": 18, "isYou": true, "time": "09:42 AM", "text": "See you." },
      { "id": 19, "isYou": false, "time": "09:45 AM", "text": "Don't be late 😄" },
      { "id": 20, "isYou": true, "time": "09:47 AM", "text": "Never!" }
    ]
  },
  {
    "sender": { "id": 2, "name": "Emily Stone" },
    "messages": [
      { "id": 21, "isYou": false, "time": "10:00 AM", "text": "Good morning! Did you check emails?" },
      { "id": 22, "isYou": true, "time": "10:02 AM", "text": "Yes, just finished replying." },
      { "id": 23, "isYou": false, "time": "10:05 AM", "text": "Perfect, thanks." },
      { "id": 24, "isYou": true, "time": "10:07 AM", "text": "No problem." },
      { "id": 25, "isYou": false, "time": "10:10 AM", "text": "We have a client call today." },
      { "id": 26, "isYou": true, "time": "10:12 AM", "text": "What time?" },
      { "id": 27, "isYou": false, "time": "10:15 AM", "text": "Around 4 PM." },
      { "id": 28, "isYou": true, "time": "10:17 AM", "text": "Okay, I'll prepare." },
      { "id": 29, "isYou": false, "time": "10:20 AM", "text": "Please review the proposal." },
      { "id": 30, "isYou": true, "time": "10:22 AM", "text": "Sure, sending feedback soon." },
      { "id": 31, "isYou": false, "time": "10:25 AM", "text": "Here is the file", "link": "https://example.com/proposal" },
      { "id": 32, "isYou": true, "time": "10:27 AM", "text": "Downloaded." },
      { "id": 33, "isYou": false, "time": "10:30 AM", "text": "Looks good so far?" },
      { "id": 34, "isYou": true, "time": "10:32 AM", "text": "Yes, minor edits needed." },
      { "id": 35, "isYou": false, "time": "10:35 AM", "text": "Okay update it." },
      { "id": 36, "isYou": true, "time": "10:37 AM", "text": "Will do." },
      { "id": 37, "isYou": false, "time": "10:40 AM", "text": "Thanks again." },
      { "id": 38, "isYou": true, "time": "10:42 AM", "text": "Anytime 😊" },
      { "id": 39, "isYou": false, "time": "10:45 AM", "text": "Catch you later." },
      { "id": 40, "isYou": true, "time": "10:47 AM", "text": "Bye 👋" }
    ]
  },
  {
    "sender": { "id": 3, "name": "Michael Chen" },
    "messages": [
      { "id": 41, "isYou": false, "time": "11:00 AM", "text": "Hi! Are we still on for lunch?" },
      { "id": 42, "isYou": true, "time": "11:02 AM", "text": "Yes, 12:30 at the usual place?" },
      { "id": 43, "isYou": false, "time": "11:05 AM", "text": "Perfect! I'll book a table." },
      { "id": 44, "isYou": true, "time": "11:07 AM", "text": "Sounds good." },
      { "id": 45, "isYou": false, "time": "11:10 AM", "text": "Did you see the new project requirements?" },
      { "id": 46, "isYou": true, "time": "11:12 AM", "text": "Just read them. Looks challenging!" },
      { "id": 47, "isYou": false, "time": "11:15 AM", "text": "Yeah, we need to brainstorm ideas." },
      { "id": 48, "isYou": true, "time": "11:17 AM", "text": "Let's discuss over lunch." },
      { "id": 49, "isYou": false, "time": "11:20 AM", "text": "Great idea! I'll bring my notes." },
      { "id": 40, "isYou": true, "time": "11:22 AM", "text": "Me too. See you soon!" },
      { "id": 51, "isYou": false, "time": "11:25 AM", "text": "Don't forget the budget file", "link": "https://example.com/budget" },
      { "id": 52, "isYou": true, "time": "11:27 AM", "text": "Got it, saved on my phone." },
      { "id": 53, "isYou": false, "time": "11:30 AM", "text": "Perfect. See you!" },
      { "id": 54, "isYou": true, "time": "11:32 AM", "text": "👍" }
    ]
  },
  {
    "sender": { "id": 4, "name": "Sarah Williams" },
    "messages": [
      { "id": 55, "isYou": false, "time": "01:00 PM", "text": "Hey! Quick question about the design." },
      { "id": 56, "isYou": true, "time": "01:02 PM", "text": "Sure, what's up?" },
      { "id": 57, "isYou": false, "time": "01:05 PM", "text": "Should we use the new color palette?" },
      { "id": 58, "isYou": true, "time": "01:07 PM", "text": "Yes, client approved it yesterday." },
      { "id": 59, "isYou": false, "time": "01:10 PM", "text": "Awesome! I'll update the mockups." },
      { "id": 60, "isYou": true, "time": "01:12 PM", "text": "Great. Share when done?" },
      { "id": 61, "isYou": false, "time": "01:15 PM", "text": "Will do by EOD." },
      { "id": 62, "isYou": true, "time": "01:17 PM", "text": "Perfect, thanks Sarah!" },
      { "id": 63, "isYou": false, "time": "01:20 PM", "text": "Also, here's the style guide", "link": "https://example.com/styleguide" },
      { "id": 64, "isYou": true, "time": "01:22 PM", "text": "Got it. Looks comprehensive." },
      { "id": 65, "isYou": false, "time": "01:25 PM", "text": "Let me know if any changes needed." },
      { "id": 66, "isYou": true, "time": "01:27 PM", "text": "Will do! 👌" }
    ]
  },
  {
    "sender": { "id": 5, "name": "David Kumar" },
    "messages": [
      { "id": 67, "isYou": false, "time": "02:00 PM", "text": "Hi, are you attending the webinar?" },
      { "id": 68, "isYou": true, "time": "02:02 PM", "text": "Yes, registered already." },
      { "id": 69, "isYou": false, "time": "02:05 PM", "text": "Great! Let's join together." },
      { "id": 70, "isYou": true, "time": "02:07 PM", "text": "Sure, share the link again?" },
      { "id": 71, "isYou": false, "time": "02:10 PM", "text": "Here you go", "link": "https://example.com/webinar" },
      { "id": 72, "isYou": true, "time": "02:12 PM", "text": "Thanks! See you there." },
      { "id": 73, "isYou": false, "time": "02:15 PM", "text": "It starts at 3 PM sharp." },
      { "id": 74, "isYou": true, "time": "02:17 PM", "text": "Got it. I'll be ready." },
      { "id": 75, "isYou": false, "time": "02:20 PM", "text": "They'll share resources after." },
      { "id": 76, "isYou": true, "time": "02:22 PM", "text": "Nice! Looking forward to it." }
    ]
  },
  {
    "sender": { "id": 6, "name": "Jessica Lee" },
    "messages": [
      { "id": 77, "isYou": false, "time": "03:00 PM", "text": "Hi! Can you help with the presentation?" },
      { "id": 78, "isYou": true, "time": "03:02 PM", "text": "Of course! What do you need?" },
      { "id": 79, "isYou": false, "time": "03:05 PM", "text": "Need help with the charts." },
      { "id": 80, "isYou": true, "time": "03:07 PM", "text": "I can do that. Send me the data." },
      { "id": 81, "isYou": false, "time": "03:10 PM", "text": "Here's the spreadsheet", "link": "https://example.com/data" },
      { "id": 82, "isYou": true, "time": "03:12 PM", "text": "Got it. Will finish in an hour." },
      { "id": 83, "isYou": false, "time": "03:15 PM", "text": "You're a lifesaver! 🙏" },
      { "id": 84, "isYou": true, "time": "03:17 PM", "text": "Happy to help 😊" },
      { "id": 85, "isYou": false, "time": "03:20 PM", "text": "Let me know if you need anything." },
      { "id": 86, "isYou": true, "time": "03:22 PM", "text": "Will do!" }
    ]
  },
  {
    "sender": { "id": 7, "name": "Robert Taylor" },
    "messages": [
      { "id": 87, "isYou": false, "time": "04:00 PM", "text": "Hey, did you deploy the update?" },
      { "id": 88, "isYou": true, "time": "04:02 PM", "text": "Yes, deployed at 3:45 PM." },
      { "id": 89, "isYou": false, "time": "04:05 PM", "text": "Any issues?" },
      { "id": 90, "isYou": true, "time": "04:07 PM", "text": "All smooth. Monitoring now." },
      { "id": 91, "isYou": false, "time": "04:10 PM", "text": "Great work! Thanks." },
      { "id": 92, "isYou": true, "time": "04:12 PM", "text": "No problem. Here's the deploy log", "link": "https://example.com/deploy-log" },
      { "id": 93, "isYou": false, "time": "04:15 PM", "text": "Perfect. I'll review it." },
      { "id": 94, "isYou": true, "time": "04:17 PM", "text": "Let me know if anything looks off." },
      { "id": 95, "isYou": false, "time": "04:20 PM", "text": "Will do. Great job!" },
      { "id": 96, "isYou": true, "time": "04:22 PM", "text": "Thanks Robert! 🙌" }
    ]
  },
  {
    "sender": { "id": 8, "name": "Amanda Foster" },
    "messages": [
      { "id": 97, "isYou": false, "time": "05:00 PM", "text": "Hi! Are we meeting tomorrow?" },
      { "id": 98, "isYou": true, "time": "05:02 PM", "text": "Yes, 10 AM in conference room B." },
      { "id": 99, "isYou": false, "time": "05:05 PM", "text": "Perfect. I'll bring the reports." },
      { "id": 100, "isYou": true, "time": "05:07 PM", "text": "Great. Agenda shared?", "link": "https://example.com/agenda" },
      { "id": 101, "isYou": false, "time": "05:10 PM", "text": "Yes, just shared. Check it out." },
      { "id": 102, "isYou": true, "time": "05:12 PM", "text": "Looks good. Added a few points." },
      { "id": 103, "isYou": false, "time": "05:15 PM", "text": "Awesome, saw them. Thanks!" },
      { "id": 104, "isYou": true, "time": "05:17 PM", "text": "See you tomorrow then." },
      { "id": 105, "isYou": false, "time": "05:20 PM", "text": "See you! 👋" }
    ]
  },
  {
    "sender": { "id": 9, "name": "James Wilson" },
    "messages": [
      { "id": 106, "isYou": false, "time": "06:00 PM", "text": "Hey, got a minute?" },
      { "id": 107, "isYou": true, "time": "06:02 PM", "text": "Sure, what's up?" },
      { "id": 108, "isYou": false, "time": "06:05 PM", "text": "Need to discuss the timeline." },
      { "id": 109, "isYou": true, "time": "06:07 PM", "text": "Is there a delay?" },
      { "id": 100, "isYou": false, "time": "06:10 PM", "text": "Slightly. Client requested changes." },
      { "id": 111, "isYou": true, "time": "06:12 PM", "text": "How much extra time needed?" },
      { "id": 112, "isYou": false, "time": "06:15 PM", "text": "About 2-3 days." },
      { "id": 113, "isYou": true, "time": "06:17 PM", "text": "That should be fine. Let's inform stakeholders." },
      { "id": 114, "isYou": false, "time": "06:20 PM", "text": "Already drafted the email.", "link": "https://example.com/email-draft" },
      { "id": 115, "isYou": true, "time": "06:22 PM", "text": "Perfect. Send after my review." },
      { "id": 116, "isYou": false, "time": "06:25 PM", "text": "Will do. Thanks James!" }
    ]
  },
  {
    "sender": { "id": 10, "name": "Olivia Martinez" },
    "messages": [
      { "id": 117, "isYou": false, "time": "07:00 PM", "text": "Hi! Quick reminder about the team dinner." },
      { "id": 118, "isYou": true, "time": "07:02 PM", "text": "Oh yes! When is it again?" },
      { "id": 119, "isYou": false, "time": "07:05 PM", "text": "This Friday at 7 PM." },
      { "id": 120, "isYou": true, "time": "07:07 PM", "text": "Count me in! Where is it?" },
      { "id": 121, "isYou": false, "time": "07:10 PM", "text": "Italian place downtown. Here's the location", "link": "https://example.com/map" },
      { "id": 122, "isYou": true, "time": "07:12 PM", "text": "Got it. Should I bring anything?" },
      { "id": 123, "isYou": false, "time": "07:15 PM", "text": "Just yourself! It's on the team." },
      { "id": 124, "isYou": true, "time": "07:17 PM", "text": "Awesome! Looking forward to it 🍝" },
      { "id": 125, "isYou": false, "time": "07:20 PM", "text": "Me too! See you Friday." },
      { "id": 126, "isYou": true, "time": "07:22 PM", "text": "Can't wait! 🎉" }
    ]   
  },
  {
    "sender": { "id": 11, "name": "Daniel Kim" },
    "messages": [
      { "id": 127, "isYou": false, "time": "08:00 AM", "text": "Good morning! Did you check the server logs?" },
      { "id": 128, "isYou": true, "time": "08:02 AM", "text": "Yes, everything looks normal." },
      { "id": 129, "isYou": false, "time": "08:05 AM", "text": "Any unusual activity overnight?" },
      { "id": 130, "isYou": true, "time": "08:07 AM", "text": "Nothing significant. CPU usage was stable." },
      { "id": 131, "isYou": false, "time": "08:10 AM", "text": "Great. Can you share the report?" },
      { "id": 132, "isYou": true, "time": "08:12 AM", "text": "Here you go", "link": "https://example.com/server-logs" },
      { "id": 133, "isYou": false, "time": "08:15 AM", "text": "Thanks! I'll review it." },
      { "id": 134, "isYou": true, "time": "08:17 AM", "text": "Let me know if any issues." },
      { "id": 135, "isYou": false, "time": "08:20 AM", "text": "Will do. Good work!" }
    ]
  },
  {
    "sender": { "id": 12, "name": "Sophia Garcia" },
    "messages": [
      { "id": 136, "isYou": false, "time": "09:30 AM", "text": "Hey! Did you finish the user research summary?" },
      { "id": 137, "isYou": true, "time": "09:32 AM", "text": "Almost done. Need one more hour." },
      { "id": 138, "isYou": false, "time": "09:35 AM", "text": "No rush. Can you include the feedback from last week?" },
      { "id": 139, "isYou": true, "time": "09:37 AM", "text": "Already added it." },
      { "id": 140, "isYou": false, "time": "09:40 AM", "text": "Perfect! Here's the template", "link": "https://example.com/template" },
      { "id": 141, "isYou": true, "time": "09:42 AM", "text": "Got it. This helps a lot." },
      { "id": 142, "isYou": false, "time": "09:45 AM", "text": "Send it over when ready." },
      { "id": 143, "isYou": true, "time": "09:47 AM", "text": "Will do! 📊" }
    ]
  },
  {
    "sender": { "id": 13, "name": "William Zhang" },
    "messages": [
      { "id": 144, "isYou": false, "time": "10:30 AM", "text": "Hi! Are we good on the API integration?" },
      { "id": 145, "isYou": true, "time": "10:32 AM", "text": "Yes, tests are passing." },
      { "id": 146, "isYou": false, "time": "10:35 AM", "text": "Awesome! Did you document it?" },
      { "id": 147, "isYou": true, "time": "10:37 AM", "text": "Documentation is ready", "link": "https://example.com/api-docs" },
      { "id": 148, "isYou": false, "time": "10:40 AM", "text": "Great! I'll share with the team." },
      { "id": 149, "isYou": true, "time": "10:42 AM", "text": "Let me know if they have questions." },
      { "id": 150, "isYou": false, "time": "10:45 AM", "text": "Sure thing. Thanks William!" },
      { "id": 151, "isYou": true, "time": "10:47 AM", "text": "Anytime! 🚀" }
    ]
  },
  {
    "sender": { "id": 14, "name": "Emma Thompson" },
    "messages": [
      { "id": 152, "isYou": false, "time": "11:15 AM", "text": "Good morning! Did you see the marketing mockups?" },
      { "id": 153, "isYou": true, "time": "11:17 AM", "text": "Yes, they look amazing!" },
      { "id": 154, "isYou": false, "time": "11:20 AM", "text": "Any feedback before I send to client?" },
      { "id": 155, "isYou": true, "time": "11:22 AM", "text": "Just minor typo on page 3." },
      { "id": 156, "isYou": false, "time": "11:25 AM", "text": "Good catch! Fixing it now." },
      { "id": 157, "isYou": true, "time": "11:27 AM", "text": "Otherwise perfect. Great work!" },
      { "id": 158, "isYou": false, "time": "11:30 AM", "text": "Thanks! Here's the updated version", "link": "https://example.com/mockups-v2" },
      { "id": 159, "isYou": true, "time": "11:32 AM", "text": "Looks great! Send it over." },
      { "id": 160, "isYou": false, "time": "11:35 AM", "text": "Will do! 😊" }
    ]
  },
  {
    "sender": { "id": 15, "name": "Lucas Rodriguez" },
    "messages": [
      { "id": 161, "isYou": false, "time": "12:00 PM", "text": "Hey! Ready for the sprint planning?" },
      { "id": 162, "isYou": true, "time": "12:02 PM", "text": "Yes, reviewed all tickets." },
      { "id": 163, "isYou": false, "time": "12:05 PM", "text": "Great! Any blockers?" },
      { "id": 164, "isYou": true, "time": "12:07 PM", "text": "Need clarification on ticket #42." },
      { "id": 165, "isYou": false, "time": "12:10 PM", "text": "I'll add comments there." },
      { "id": 166, "isYou": true, "time": "12:12 PM", "text": "Perfect. Here's my estimation sheet", "link": "https://example.com/estimates" },
      { "id": 167, "isYou": false, "time": "12:15 PM", "text": "Looks good. Let's discuss in the meeting." },
      { "id": 168, "isYou": true, "time": "12:17 PM", "text": "See you there!" }
    ]
  },
  {
    "sender": { "id": 16, "name": "Mia Johnson" },
    "messages": [
      { "id": 169, "isYou": false, "time": "01:30 PM", "text": "Hi! Did you get the invoice?" },
      { "id": 170, "isYou": true, "time": "01:32 PM", "text": "Yes, received this morning." },
      { "id": 171, "isYou": false, "time": "01:35 PM", "text": "Can you approve it today?" },
      { "id": 172, "isYou": true, "time": "01:37 PM", "text": "Already approved. You should see it." },
      { "id": 173, "isYou": false, "time": "01:40 PM", "text": "Perfect! Thanks for the quick turnaround." },
      { "id": 174, "isYou": true, "time": "01:42 PM", "text": "No problem. Here's the reference", "link": "https://example.com/invoice-342" },
      { "id": 175, "isYou": false, "time": "01:45 PM", "text": "Got it. Have a great day!" },
      { "id": 176, "isYou": true, "time": "01:47 PM", "text": "You too! 💰" }
    ]
  },
  {
    "sender": { "id": 17, "name": "Ethan Brown" },
    "messages": [
      { "id": 177, "isYou": false, "time": "02:15 PM", "text": "Hey! Are you coming to the team building?" },
      { "id": 178, "isYou": true, "time": "02:17 PM", "text": "Yes, I signed up last week." },
      { "id": 179, "isYou": false, "time": "02:20 PM", "text": "Awesome! Do you need a ride?" },
      { "id": 180, "isYou": true, "time": "02:22 PM", "text": "That would be great, thanks!" },
      { "id": 181, "isYou": false, "time": "02:25 PM", "text": "I'll pick you up at 8 AM." },
      { "id": 182, "isYou": true, "time": "02:27 PM", "text": "Perfect. Here's my address", "link": "https://example.com/location" },
      { "id": 183, "isYou": false, "time": "02:30 PM", "text": "Got it. See you Saturday!" },
      { "id": 184, "isYou": true, "time": "02:32 PM", "text": "Looking forward to it! 🎯" }
    ]
  },
  {
    "sender": { "id": 18, "name": "Isabella Clark" },
    "messages": [
      { "id": 185, "isYou": false, "time": "03:15 PM", "text": "Hi! Quick sync on the social media campaign?" },
      { "id": 186, "isYou": true, "time": "03:17 PM", "text": "Sure, what's up?" },
      { "id": 187, "isYou": false, "time": "03:20 PM", "text": "Need the final graphics by tomorrow." },
      { "id": 188, "isYou": true, "time": "03:22 PM", "text": "They're almost ready. Here's a preview", "link": "https://example.com/preview" },
      { "id": 189, "isYou": false, "time": "03:25 PM", "text": "Love them! Just adjust the logo size." },
      { "id": 190, "isYou": true, "time": "03:27 PM", "text": "Will do. Anything else?" },
      { "id": 191, "isYou": false, "time": "03:30 PM", "text": "That's it. Thanks Isabella!" },
      { "id": 192, "isYou": true, "time": "03:32 PM", "text": "You're welcome! 📱" }
    ]
  },
  {
    "sender": { "id": 19, "name": "Alexander Wright" },
    "messages": [
      { "id": 193, "isYou": false, "time": "04:30 PM", "text": "Hey! Did you review the contract?" },
      { "id": 194, "isYou": true, "time": "04:32 PM", "text": "Yes, went through it carefully." },
      { "id": 195, "isYou": false, "time": "04:35 PM", "text": "Any concerns?" },
      { "id": 196, "isYou": true, "time": "04:37 PM", "text": "Just one section. I added comments." },
      { "id": 197, "isYou": false, "time": "04:40 PM", "text": "Let me see. Here's the doc", "link": "https://example.com/contract-review" },
      { "id": 198, "isYou": true, "time": "04:42 PM", "text": "Great. Let me know your thoughts." },
      { "id": 199, "isYou": false, "time": "04:45 PM", "text": "Makes sense. I'll update it." },
      { "id": 200, "isYou": true, "time": "04:47 PM", "text": "Perfect. We can finalize tomorrow." },
      { "id": 201, "isYou": false, "time": "04:50 PM", "text": "Sounds good! Thanks Alex." }
    ]
  },
  {
    "sender": { "id": 20, "name": "Charlotte Davis" },
    "messages": [
      { "id": 202, "isYou": false, "time": "05:30 PM", "text": "Hi! Are you available for a quick call?" },
      { "id": 203, "isYou": true, "time": "05:32 PM", "text": "Yes, give me 5 minutes." },
      { "id": 204, "isYou": false, "time": "05:35 PM", "text": "Sure. Here's the meeting link", "link": "https://example.com/meeting-room" },
      { "id": 205, "isYou": true, "time": "05:37 PM", "text": "Joining now." },
      { "id": 206, "isYou": false, "time": "06:00 PM", "text": "Great discussion! Thanks for your time." },
      { "id": 207, "isYou": true, "time": "06:02 PM", "text": "Anytime! I'll send the summary." },
      { "id": 208, "isYou": false, "time": "06:05 PM", "text": "Perfect. Here are the notes I took", "link": "https://example.com/meeting-notes" },
      { "id": 209, "isYou": true, "time": "06:07 PM", "text": "Awesome! Have a great evening." },
      { "id": 210, "isYou": false, "time": "06:10 PM", "text": "You too! 🌟" }
    ]
  }
]