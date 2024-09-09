package novels

import (
    "net/http"
    "strconv"

    "github.com/gin-gonic/gin"
    "example.com/novel/config"
    "example.com/novel/entity"
)

// GetAll returns all novels
func GetAll(c *gin.Context) {
    var novels []entity.Novel
    db := config.DB()

    results := db.Preload("Writer").Preload("Bookshelf").Find(&novels)
    if results.Error != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"novels": novels})
}

// Get returns a novel by ID
func Get(c *gin.Context) {
    ID, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
        return
    }

    var novel entity.Novel
    db := config.DB()

    results := db.Preload("Writer").Preload("Bookshelf").First(&novel, ID)
    if results.Error != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"novel": novel})
}

// Update modifies an existing novel
func Update(c *gin.Context) {
    ID, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
        return
    }

    var novel entity.Novel
    db := config.DB()

    result := db.Preload("Writer").Preload("Bookshelf").First(&novel, ID)
    if result.Error != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Novel not found"})
        return
    }

    if err := c.ShouldBindJSON(&novel); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON payload"})
        return
    }

    result = db.Save(&novel)
    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update novel"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "Novel updated successfully", "novel": novel})
}

// Create adds a new novel
func Create(c *gin.Context) {
    var novel entity.Novel

    if err := c.ShouldBindJSON(&novel); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON payload"})
        return
    }

    db := config.DB()

    result := db.Preload("Writer").Preload("Bookshelf").Create(&novel)
    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create novel"})
        return
    }

    c.JSON(http.StatusCreated, gin.H{"message": "Novel created successfully", "novel": novel})
}

// Delete removes a novel by ID
func Delete(c *gin.Context) {
    ID, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
        return
    }

    db := config.DB()

    result := db.Preload("Writer").Preload("Bookshelf").Delete(&entity.Novel{}, ID)
    if result.RowsAffected == 0 {
        c.JSON(http.StatusNotFound, gin.H{"error": "Novel not found"})
        return
    }

    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete novel"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "Novel deleted successfully"})
}