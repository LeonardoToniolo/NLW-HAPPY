import Orphanage from '../models/Orphanage'
import imagesView from './imagesView';

export default {
    render (orphanange: Orphanage) {        
        return {
            id: orphanange.id,
            name: orphanange.name,
            latitude: orphanange.latitude,
            longitude: orphanange.longitude,
            whatsapp: orphanange.whatsapp,
            about: orphanange.about,
            instructions: orphanange.instructions,
            opening_hours: orphanange.opening_hours,
            open_on_weekends: orphanange.open_on_weekends,
            approved: orphanange.approved,
            images: imagesView.renderMany(orphanange.images),
        };
    },

    renderMany (orphanange: Orphanage[]) {
        return orphanange.map(orphanange => this.render(orphanange));
    }
};