// Рекурсія: Deep Copy

const deepCopy = (obj) => {
   if (obj === null || typeof obj !== 'object') {
      return obj; // Если obj - это null или не объект, вернем его как есть
   }

   if (Array.isArray(obj)) {
      // Если obj - это массив, создаем новый массив и рекурсивно копируем его элементы
      const newArray = [];
      for (let i = 0; i < obj.length; i++) {
         newArray[i] = deepCopy(obj[i]);
      }
      return newArray;
   }

   // Если obj - это объект, создаем новый объект и рекурсивно копируем его свойства
   const newObj = {};
   for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
         newObj[key] = deepCopy(obj[key]);
      }
   }
   return newObj;
}