import {Component} from "@angular/core";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   products: ProductType[] = [
    {
      image: 'pizza1.png',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы'
    },
    {
      image: 'pizza2.png',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось'
    },
    {
      image: 'pizza3.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста'
    },
    {
      image: 'pizza4.png',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'
    },
    {
      image: 'pizza5.png',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили'
    },
    {
      image: 'pizza6.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная'
    },
    {
      image: 'pizza7.png',
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы'
    },
    {
      image: 'pizza8.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный'
    },
  ];

   formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

   scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

   addToCard(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
    this.products = this.products.filter(item => item.title.toUpperCase() !== title.toUpperCase());
  }

   createOrder() {

    if (!this.formValues.productTitle) {
      alert('Выберете пиццу');
      return;
    }

    if (!this.formValues.address) {
      alert('Введите адрес');
      return;
    }

    if (!this.formValues.phone) {
      alert('Введите номер');
      return;
    }

    alert('Спасибо за заказ');
    this.formValues = {
      productTitle: '',
      address: '',
      phone: '',
    }
  }
}
