function Filters() {
  return (
    <div>
      <div>Welcome, Amanda</div>
      <div>Tue, 07, June, 2022</div>
      <div>Filter</div>
      <div>Location</div>
      <input
        type="text"
        placeholder="Scotland"
      />

      <div>Type of places</div>

      <div>
        <input type="checkbox" />
        <label>All</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>Building</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>Apartment</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>Office</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>Shop</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>House</label>
      </div>

      <div>
        <div>Price Range</div>
        <input type="range" />
      </div>

      <div>
        <div>Size</div>
        <input
          type="number"
          placeholder="min"
        />
        <input
          type="number"
          placeholder="max"
        />
      </div>

      <div>
        <div>Feaures</div>
        <div>
          <input type="checkbox" />
          <label>Ac & Heating</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Clubhouse</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Dish Washer</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Spa</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Balcony</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Pool</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Fitness Centre</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Valet Parking</label>
        </div>
      </div>

      <div>
        <div>Style</div>
        <div>
          <input type="checkbox" />
          <label>A-Frame</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Dome</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Cottage</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Spanish</label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
