// mail service:
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services//async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const MAIL_KEY = 'mailDB'
const logginUser = {
  email: 'Noamgr11@gmail.com',
  fullName: 'Noam Green'
}

const gEmails = [
  {
    id: 'e101',
    subject: 'Hello there',
    body: 'Just checking in to say hi!',
    isRead: false,
    sentAt: 'May 18',
    removedAt: null,
    from: 'johndoe@example.com',
    to: 'janedoe@example.com'
  },
  {
    id: 'e102',
    subject: 'Reminder: Meeting tomorrow',
    body: 'Just a friendly reminder that we have a meeting scheduled for tomorrow at 10am.',
    isRead: true,
    sentAt: 'Feb 28',
    removedAt: null,
    from: 'manager@example.com',
    to: 'employee@example.com'
  },
  {
    id: 'e103',
    subject: 'Regarding your request',
    body: 'Thank you for submitting your request. We will review it and get back to you as soon as possible.',
    isRead: false,
    sentAt: 'Jul 12',
    removedAt: null,
    from: 'support@example.com',
    to: 'user@example.com'
  },
  {
    id: 'e104',
    subject: 'Product update',
    body: 'We are pleased to announce that our latest product update is now available. Here are some of the new features...',
    isRead: false,
    sentAt: 'Aug 20',
    removedAt: null,
    from: 'marketing@example.com',
    to: 'customers@example.com'
  },
  {
    id: 'e105',
    subject: 'Important notice regarding your account',
    body: 'We have detected some suspicious activity on your account. Please log in to your account and update your security settings immediately.',
    isRead: true,
    sentAt: 'Aug 17',
    removedAt: null,
    from: 'security@example.com',
    to: 'user@example.com'
  },
  {
    id: 'e106',
    subject: 'Invitation to our event',
    body: 'You are cordially invited to our annual company event. Please RSVP at your earliest convenience.',
    isRead: false,
    sentAt: 'Aug 13',
    removedAt: null,
    from: 'events@example.com',
    to: 'guest@example.com'
  },
  {
    id: 'e107',
    subject: 'Thank you for your purchase',
    body: 'Thank you for your recent purchase. We hope you enjoy your new product!',
    isRead: true,
    sentAt: 'Feb 28',
    removedAt: null,
    from: 'sales@example.com',
    to: 'customer@example.com'
  },
  {
    id: 'e108',
    subject: 'Your application status',
    body: 'Thank you for applying to our company. We regret to inform you that we are unable to move forward with your application at this time.',
    isRead: false,
    sentAt: 'May 20',
    removedAt: null,
    from: 'recruiting@example.com',
    to: 'applicant@example.com'
  },
  {
    id: 'e109',
    subject: 'Important update regarding your flight',
    body: 'Your flight has been delayed by 2 hours. Please check the airport website for more information.',
    isRead: false,
    sentAt: 'Jul 4',
    removedAt: null,
    from: 'airlines@example.com',
    to: 'passenger@example.com'
  }

  , {
    id: 'e111',
    subject: 'Thank you for your inquiry',
    body: 'Thank you for contacting us. We will get back to you shortly.',
    isRead: false,
    sentAt: 'May 4',
    removedAt: null,
    from: 'support@example.com',
    to: 'user@example.com'
  },
  {
    id: 'e112',
    subject: 'Important update regarding your account',
    body: 'We have updated our terms of service. Please review them carefully and let us know if you have any questions or concerns.',
    isRead: true,
    sentAt: 'Aug 2',
    removedAt: null,
    from: 'legal@example.com',
    to: 'user@example.com'
  },
  {
    id: 'e113',
    subject: 'Happy Birthday!',
    body: 'Wishing you a happy birthday and a wonderful year ahead!',
    isRead: false,
    sentAt: 'Jan 1',
    removedAt: null,
    from: 'friends@example.com',
    to: 'user@example.com'
  },
  {
    id: 'e114',
    subject: 'New job opportunity',
    body: 'We have a new job opportunity that may be of interest to you. Please review the job description and let us know if you would like to apply.',
    isRead: false,
    sentAt: 'Dec 3',
    removedAt: null,
    from: 'recruiting@example.com',
    to: 'applicant@example.com'
  },
  {
    id: 'e115',
    subject: 'Confirm your subscription',
    body: 'Please confirm your subscription by clicking on the link below:',
    isRead: false,
    sentAt: 'Dec 2',
    removedAt: null,
    from: 'subscriptions@example.com',
    to: 'user@example.com'
  },
  {
    id: 'e116',
    subject: 'Your order has been shipped',
    body: 'Your order has been shipped and will arrive within 3-5 business days. Thank you for your purchase!',
    isRead: true,
    sentAt: 'Dec 1',
    removedAt: null,
    from: 'sales@example.com',
    to: 'customer@example.com'
  },
  {
    id: 'e117',
    subject: 'Upcoming maintenance',
    body: 'Our website will be undergoing maintenance tomorrow from 10pm to 2am. Please plan accordingly.',
    isRead: false,
    sentAt: 'Nov 3',
    removedAt: null,
    from: 'it@example.com',
    to: 'user@example.com'
  },
  {
    id: 'e118',
    subject: 'Feedback request',
    body: 'We would love to hear your feedback on our product. Please take a few minutes to complete our survey.',
    isRead: false,
    sentAt: 'Aug 2',
    removedAt: null,
    from: 'feedback@example.com',
    to: 'user@example.com'
  },
  {
    id: 'e119',
    subject: 'Congratulations!',
    body: 'Congratulations on your recent achievement. We are proud of you!',
    isRead: true,
    sentAt: 'May 2',
    removedAt: null,
    from: 'friends@example.com',
    to: 'user@example.com'
  },
]

_createEmails()

export const mailService = {
  query,
  saveEmail,
  getEmail,
  removeEmail,
  getEmptyMail,
  createMail,
  updateEmail,
  // getEmailMenu

}

function query() {
  return asyncStorageService.query(MAIL_KEY).then(mails => {
    return mails
  })
}
function saveEmail(mail) {
  return asyncStorageService.post(MAIL_KEY, mail)
}

async function updateEmail(email) {
  return asyncStorage.put(MAIL_KEY, email)
}

function getEmail(mailId) {
  return asyncStorageService.get(MAIL_KEY, mailId)
}

function removeEmail(mailId) {
  return asyncStorageService.remove(MAIL_KEY, mailId)
}

function _createEmails() {
  let mails = storageService.loadFromStorage(MAIL_KEY) || []
  if (!mails || !mails.length) {
    mails = gEmails
    storageService.saveToStorage(MAIL_KEY, mails)
  }
}

function dateFormatter() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  return formattedDate
}

function createMail(subject, body) {
  const email = {
    id: utilService.makeId(),
    subject,
    body,
    isRead: false,
    sentAt: dateFormatter(),
    removedAt: null,
    from: logginUser.email,
  }
  return email
}

function getEmptyMail(title = '', description = '') {
  return { id: '', title, description }
}



// export function getEmailMenu() {
//   return [
//     {
//       title: 'Inbox',
//       // icon: '/path/assets/img/Gmail/inbox.png',
//     },
//     {
//       title: 'Starred',
//       // icon: '/path/assets/img/Gmail/star.png',
//     },
//     {
//       title: 'Sent',
//       // icon: '/path/assets/img/Gmail/sent.png',
//     },

//   ]
// }