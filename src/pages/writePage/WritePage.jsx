import './writePage.css'

export default function WritePage() {
    return (
        <div className="write">
            <from className="writeForm">
                <img src="header.jpg" alt="article" className="addedImg" />
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="addIcon fa-solid fa-circle-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder='Title' className='titleInput writeInput'/>
                </div>
                <div className="writeFormGroup">
                    <textarea className='writeInput textInput' placeholder='Tell your story...'></textarea>
                </div>
                <button className="publishBtn">Publish</button>
            </from>
        </div>
    )
}
