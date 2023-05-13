import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    save,
    getEmptyNote,
    remove,
    getDefaultFilter
}

function remove(noteId) {
    return asyncStorageService.remove(NOTE_KEY, noteId)
}

function query(filterBy = {}) {
    return asyncStorageService.query(NOTE_KEY)
        .then(notes => {
            const regExp = new RegExp(filterBy.filter, 'i')
            notes = notes.filter(note => {
                return regExp.test(note.title)
            })
            return notes
        })
}

function getDefaultFilter() {
    return { filter: '' }
}

function _createNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = []
        notes.push(_createNote('Meeting Notes - Marketing Strategy', 'Attendees:John Smith,Sarah Lee,Emily Chen, David Kim'))
        notes.push(_createNote('Grocery List', 'Eggs,Milk,Bread,BananasChicken'))
        notes.push(_createNote('Phone Call with Client', 'Discussed project timeline, Addressed client concerns, Agreed on next steps'))
        notes.push(_createNote('To future me', 'Survive this, it will pay off'))
        storageService.saveToStorage(NOTE_KEY, notes)
    }
}

function _createNote(title, content,) {
    const newNote = { title, content, }
    newNote.id = utilService.makeId()
    return newNote
}

function getEmptyNote() {
    return { title: '', content: '', backgroundColor: '#fff' }
}

function save(note) {
    if (note.id) {
        return asyncStorageService.put(NOTE_KEY, note)
    } else {
        return asyncStorageService.post(NOTE_KEY, note)
    }
}