const { Link } = ReactRouterDOM

import { MailPreview } from "./mail-preview.jsx"

export function MailList({ mails }) {
    console.log(mails)
    return (
        <ul className="mail-list">
            {mails.map(mail =>
                <li key={mail.id}>
                    <MailPreview mail={mail} />
                    <section>
                        {/* btn here */}
                    </section>
                </li>
            )}
        </ul>
    )

}


{/* <button onClick={() => onRemoveBook(book.id)} >Remove Book</button>
                        <button><Link to={`/book/${book.id}`}>Details</Link>
                        </button> */}

{/* <button><Link to={`/book/edit/${book.id}`} >Edit</Link></button> */ }