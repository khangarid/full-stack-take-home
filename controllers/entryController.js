const mongoose = require("mongoose");
const Entry = mongoose.model("entries");

class EntryController {
  async addEntry(entry) {
    const newEntry = new Entry(entry);

    try {
      await newEntry.save();
      return newEntry;
    } catch (error) {
      return { error };
    }
  }

  async entries(query) {
    const { sort, order, page, limit } = query;

    try {
      const entries = await Entry.find()
        .skip(parseInt(page) * parseInt(limit) - parseInt(limit))
        .limit(parseInt(limit))
        .sort({ [sort]: order });

      const total = await Entry.count();

      return { entries, total };
    } catch (error) {
      return { error };
    }
  }

  async entry(_id) {
    try {
      const entry = await Entry.findOne({ _id });
      return entry;
    } catch (error) {
      return { error };
    }
  }
}

module.exports = new EntryController();
