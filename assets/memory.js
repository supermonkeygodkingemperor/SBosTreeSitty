import { Paging } from 'paging';

class Memory {
  constructor() {
    this.paging = new Paging();
  }

  load(address) {
    try {
      const page = this.paging.getPage(address);
      return page.data;
    } catch (error) {
      console.error('Memory Error:', error);
    }
  }

  protect(address, permissions) {
    this.paging.protect(address, permissions);
  }
}

export default Memory;
