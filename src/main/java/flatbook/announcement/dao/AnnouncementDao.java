package flatbook.announcement.dao;

import flatbook.announcement.entity.Amenity;
import flatbook.announcement.entity.Announcement;
import flatbook.announcement.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnnouncementDao extends JpaRepository<Announcement, Integer> {

    List<Announcement> getAnnouncementByCityAndRoomsAndLivingPlacesAndPricePerDayBetween(City city, Integer rooms, Integer livingPlaces, Integer startingPrice, Integer finalPrice);

    List<Announcement> getAnnouncementByCityAndRoomsAndLivingPlacesAndPricePerMonthBetween(City city, Integer rooms, Integer livingPlaces, Integer startingPrice, Integer finalPrice);

    List<Announcement> getAnnouncementByCityAndRoomsAndLivingPlacesAndPricePerDayBetweenAndAmenities(City city, Integer rooms, Integer livingPlaces, Integer startingPrice, Integer finalPrice, List<Amenity> amenity);

    List<Announcement> getAnnouncementByCityAndRoomsAndLivingPlacesAndPricePerMonthBetweenAndAmenities(City city, Integer rooms, Integer livingPlaces, Integer startingPrice, Integer finalPrice, List<Amenity> amenity);

}
