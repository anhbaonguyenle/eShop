using System.ComponentModel.DataAnnotations;

namespace backend.Models;

    public class UserModel
    {
        [Key]
        [Required(ErrorMessage = "Tên đăng nhập không được để trống")]
        public string UserName { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Adress { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
    }
