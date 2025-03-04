import sanity from './client'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(sanity)

export const CreateURL = (source, width = 300, height = 300 ) => {
    return builder.image(source).width(width).height(height).url()
}


export const FormatDate = (date) => {
    return new Date(date).toLocaleDateString()
} 


// for content paragraph line breaks , replace sanity's new line with br breaks tags 
export const TextToHTML = (text) => {
    return text.replace(/\n/g, "<br>")

}